import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

interface userData {
  status: boolean;
  message: string;
}

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private backend: string = 'https://web-game-engine-server.herokuapp.com';
  constructor(private http: HttpClient) {}

  requestOptions = {
    headers: new HttpHeaders({
      Authorization: 'my-request-token',
    }),
    withCredentials: true,
  };
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
    withCredentials: true,
  };
  getUserData() {
    return this.http.get<userData>(`${this.backend}/api/userData`, {
      withCredentials: true,
    });
  }
}
