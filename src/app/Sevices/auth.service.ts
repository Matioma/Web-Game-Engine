import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

interface Credentials {
  login: string;
  password: string;
}

interface AuthentificationResponse {
  success: boolean;
  error: string;
}

interface IsLoggedIn {
  loggedIn: boolean;
}

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private isLoggedIn = false;

  set IsLoggedIn(value: boolean) {
    this.isLoggedIn = value;
  }
  get IsLoggedIn() {
    return this.isLoggedIn;
  }

  private backend: string = 'https://web-game-engine-server.herokuapp.com';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
    withCredentials: true,
    // observe: 'response' as 'response',
  };

  constructor(private http: HttpClient) {}

  RegisterUser(data: Credentials) {
    return this.http.post<AuthentificationResponse>(
      `${this.backend}/api/register`,
      data,
      this.httpOptions
    );
  }
  LoginUser(data: Credentials) {
    return this.http.post<AuthentificationResponse>(
      `${this.backend}/api/login`,
      data
    );
  }
  LogOut() {
    return this.http.post(`${this.backend}/api/logout`, {}, this.httpOptions);
  }

  IsLoggedInAPI() {
    return this.http.get<IsLoggedIn>(
      `${this.backend}/api/loggedIn`,
      this.httpOptions
    );
  }
}
