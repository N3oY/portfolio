import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './screens/home/home.component';
import { ProjectComponent } from './screens/project/project.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { provideHttpClient, withFetch } from '@angular/common/http';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { 
    path: 'project', 
    children: [ // Lista de proyectos
      { path: ':id', component: ProjectComponent } // Detalle de un proyecto
    ]
  },
  { path: '**', redirectTo: '/home' } // Redirección para rutas no encontradas
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
