import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

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

  constructor(private router: Router) { }

  login(): void {
    const storedCodigo = 'SM71400899';
    const storedPassword = '10032005';

    if (this.codigoAlumno === storedCodigo && this.fechaNacimiento === storedPassword) {
      sessionStorage.setItem('codigoAlumno', this.codigoAlumno);
      this.router.navigate(['/posts']);
    } else {
      this.errorMessage = 'Código de alumno o contraseña incorrectos';
    }
  }
}



