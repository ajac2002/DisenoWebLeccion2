import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostresService {
  private apiUrl = 'https://raw.githubusercontent.com/vjuradov/ejemploDatosConsumo/refs/heads/main/leccion-recetas.json';

  constructor(private http: HttpClient) {}

  getPostres(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }
}
