import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  constructor(private httpClient: HttpClient) {}

  login(username: any, password: any) {
    let login = {
      username: username,
      password: password,
    };

    return this.httpClient.post(
      'https://localhost:50103/api/Account/Login',
      login
    );
  }

  getToken() {
    if (localStorage.hasOwnProperty('authenticationToken'))
      return localStorage.getItem('authenticationToken');
    return null;
  }
}
