import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment.development';
import { catchError, Observable } from 'rxjs';
//import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private token: string = '';
  get isLoggedIn() {
    return this.token !=='';
  }
  constructor(private http: HttpClient) { }

  login(data: any): void {
    this.http.post<any>(`${environment.apiUrl}/auth/login`, data).subscribe({
      next: (response)  => {
        if(response && response.token) {
          this.token = response.token;
        }
      },
      error: (error: HttpErrorResponse) => {
        console.error(`Login Failed with status code ${error.status} with message of: ${error.message}`);
      }
    })
  }
  signup(email:string, password: string): Observable<any> {
    const registerData = { email, password };
    return this.http.post<any>(`${environment.apiUrl}/register`, registerData)
      .pipe(
        catchError(error => this.handleError(error))
      );
  }
  private handleError(error: any) {
    let errorMessage = 'An unknown error occurred';
    if(error.error && error.error.message) {
      errorMessage = error.message;
    }
    return errorMessage;
  }
}
