import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './screens/home/home.component';
import { ProjectComponent } from './screens/project/project.component';
import { NavbarComponent } from './components/navbar/navbar.component';

const routes: Routes = [
          {path: '', redirectTo: '/home', pathMatch: 'full' },
          {path:'home', component:HomeComponent},
          {path:'project',component:ProjectComponent},
          {path:'project/:id',component:ProjectComponent},
          ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
