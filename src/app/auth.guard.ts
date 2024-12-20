import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private router: Router) { }

  canActivate(): boolean {
    const codigoAlumno = sessionStorage.getItem('codigoAlumno');
    if (codigoAlumno) {
      return true;
    } else {
      this.router.navigate(['/auth']);
      return false;
    }
  }
}
