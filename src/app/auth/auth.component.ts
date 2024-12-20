import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-auth',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent {
  codigoAlumno: string = '';
  fechaNacimiento: string = '';
  errorMessage: string = '';

  constructor(private router: Router, private authService: AuthService) { }

  login(): void {
    const isLoggedIn = this.authService.login(this.codigoAlumno, this.fechaNacimiento);

    if (isLoggedIn) {
      this.router.navigate(['/users']);
    } else {
      this.errorMessage = 'Código de alumno o contraseña incorrectos';
    }
  }
}
