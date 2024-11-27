import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development'
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
   private tokem = '';

   get IsLoggedIn() {
     return this.tokem !== '';
   }

  constructor(private http: HttpClient) { }

  login(): Observable<any> {
    return this.http.get<any>(`${environment.apiUrl}/products?limit=15`)
  }
}
