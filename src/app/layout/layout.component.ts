import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css'],
})
export class LayoutComponent {
  constructor(private router: Router) {}

  onLogout() {
    localStorage.removeItem('authenticationToken');
    localStorage.clear();
    this.router.navigateByUrl('/login');
  }
}
