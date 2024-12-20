import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private authSubject = new BehaviorSubject<boolean>(this.isAuthenticated());

  constructor() { }

  isAuthenticated(): boolean {
    return !!sessionStorage.getItem('codigoAlumno');
  }

  login(codigoAlumno: string, fechaNacimiento: string): boolean {
    const storedCodigo = 'SM71400899';
    const storedPassword = '10032005';

    if (codigoAlumno === storedCodigo && fechaNacimiento === storedPassword) {
      sessionStorage.setItem('codigoAlumno', codigoAlumno);
      this.authSubject.next(true);
      return true;
    }
    return false;
  }

  logout(): void {
    sessionStorage.removeItem('codigoAlumno');
    this.authSubject.next(false);
  }

  getAuthStatus() {
    return this.authSubject.asObservable();
  }
}
