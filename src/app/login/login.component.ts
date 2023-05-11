import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from '../shared/services/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  userName: string = '';
  password: string = '';

  constructor(
    private router: Router,
    private authService: AuthenticationService
  ) {}

  validateUser(loginForm: NgForm) {
    this.authService
      .login(loginForm.value.userName, loginForm.value.password)
      .subscribe((d: any) => {
        localStorage.setItem('authenticationToken', d.token);
        this.router.navigateByUrl('app/recruiting/candidate-list');
      });
  }
}
