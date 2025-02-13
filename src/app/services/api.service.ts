import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiService { // Ruta del archivo JSON

  constructor(private http: HttpClient) {}
  
  datos: any[]=[];
  
  private jsonURL = '/assets/data.json';

  getItems(): Observable<any> {
    return this.http.get(this.jsonURL);
  }

  getItem(id: number): Observable<any> {
    
    return this.http.get<any[]>(this.jsonURL).pipe(
      map(items => items.find(item => item.id === id))
    );
  }
    
}