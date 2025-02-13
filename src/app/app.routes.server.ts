import { RenderMode, ServerRoute } from '@angular/ssr';

export const serverRoutes: ServerRoute[] = [
  { path: '', renderMode: RenderMode.Server },  // The root route '/'
  { path: 'home', renderMode: RenderMode.Server },  // The '/home' route
  { path: 'project', renderMode: RenderMode.Server },  // The '/project' route
  { path: 'project/:id', renderMode: RenderMode.Server },  // The dynamic '/project/:id' route
  { path: '**', renderMode: RenderMode.Server }  // Fallback route for any other paths
];