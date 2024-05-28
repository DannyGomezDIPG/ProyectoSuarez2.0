import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {
  username: string = '';
  password: string = '';

  constructor(private router: Router) {}

  onLogin() {
    if (this.username === 'user' && this.password === 'password') {
      // Redirigir a la página principal
      this.router.navigate(['/nueva-pagina']);
    } else {
      alert('Credenciales inválidas');
    }
  }
}
