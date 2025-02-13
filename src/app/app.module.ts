import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';

import { BrowserModule, provideClientHydration, withEventReplay } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';

import { HomeComponent } from './screens/home/home.component';
import { ProjectComponent } from './screens/project/project.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HttpClientModule } from '@angular/common/http';
import { ApiService } from './services/api.service';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProjectComponent,
    NavbarComponent,
    
  ],
  imports: [
      BrowserModule,
      RouterModule.forRoot([]),
      NgbModule, 
      AppRoutingModule,
      HttpClientModule,
      
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})

export class AppModule { }
