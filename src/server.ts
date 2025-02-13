import {
  AngularNodeAppEngine,
  createNodeRequestHandler,
  isMainModule,
  writeResponseToNodeResponse,
} from '@angular/ssr/node';
import express from 'express';
import { AngularAppEngine, createRequestHandler } from '@angular/ssr';
import { dirname, resolve } from 'node:path';

import { fileURLToPath } from 'node:url';
import { getContext } from '@netlify/angular-runtime/context'; // <- Elimina esta línea si no es necesaria

import { CommonEngine } from '@angular/ssr/node';
import { render } from '@netlify/angular-runtime/common-engine';

const serverDistFolder = dirname(fileURLToPath(import.meta.url));
const browserDistFolder = resolve(serverDistFolder, '../browser');
import { readFileSync } from 'fs';
import { join } from 'path';

const app = express();
const angularApp = new AngularNodeAppEngine();


const angularAppEngine = new AngularAppEngine();

export async function netlifyAppEngineHandler(request: Request): Promise<Response> {
  const context = getContext();
  const url = new URL(request.url);

  // ✅ Servir el archivo JSON desde /api/data
  if (url.pathname === '/api/data') {
    try {
      const filePath = join(process.cwd(), 'src/assets/data.json'); // Ajusta la ruta si es necesario
      const jsonData = readFileSync(filePath, 'utf-8');

      return new Response(jsonData, {
        headers: { 'Content-Type': 'application/json' },
        status: 200
      });
    } catch (error) {
      return new Response(JSON.stringify({ error: 'No se pudo leer el archivo' }), {
        headers: { 'Content-Type': 'application/json' },
        status: 500
      });
    }
  }

  // Si la solicitud no es para la API, delegarla a Angular SSR
  const result = await angularAppEngine.handle(request, context);
  return result || new Response('Not found', { status: 404 });
}

/**
 * Manejador de solicitudes utilizado por Angular CLI (dev-server y durante build).
 */
export const reqHandler = createRequestHandler(netlifyAppEngineHandler);

/**
 * Serve static files from /browser
 */
app.use(
  express.static(browserDistFolder, {
    maxAge: '1y',
    index: false,
    redirect: false,
  }),
);

/**
 * Handle all other requests by rendering the Angular application.
 */
app.use('/**', (req, res, next) => {
  angularApp
    .handle(req)
    .then((response) =>
      response ? writeResponseToNodeResponse(response, res) : next(),
    )
    .catch(next);
});

/**
 * Start the server if this module is the main entry point.
 * The server listens on the port defined by the `PORT` environment variable, or defaults to 4000.
 */
if (isMainModule(import.meta.url)) {
  const port = process.env['PORT'] || 4000;
  app.listen(port, () => {
    console.log(`Node Express server listening on http://localhost:${port}`);
  });
}