import { Component , OnInit} from '@angular/core';
import { ApiService } from '../../services/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: false,
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})

export class HomeComponent implements OnInit {

    datos: any[]=[];

    id: any[]=[];

    constructor(private apiService: ApiService) {}

    ngOnInit(){
      this.apiService.getItems().subscribe((data) => {
          this.datos = data; // Cambia según tu estructura JSON
          //console.log(this.datos);
      });
  }
    
    
}

