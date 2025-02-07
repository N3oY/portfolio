import { Component, TemplateRef } from '@angular/core';
import { NavbarComponent } from './components/navbar/navbar.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.scss'
})
export class AppComponent {
open(_t46: TemplateRef<any>) {
throw new Error('Method not implemented.');
}
  title = 'portfolio';
}
