import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration, withEventReplay } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './screens/home/home.component';
import { ProjectComponent } from './screens/project/project.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HttpClientModule } from '@angular/common/http';
import { ApiService } from './services/api.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProjectComponent,
    NavbarComponent,
    
  ],
  imports: [
      BrowserModule,
      NgbModule, 
      AppRoutingModule,
      HttpClientModule,
      
      
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})

export class AppModule { }
