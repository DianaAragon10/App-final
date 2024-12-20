import { Component, OnInit, OnDestroy } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';
import { AuthService } from './auth.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MatToolbarModule, CommonModule, RouterModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'AppFrontSM71402380';
  isAuthenticated: boolean = false;
  private authSubscription: Subscription = new Subscription();  // Inicializamos la suscripción

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit(): void {
    // Nos suscribimos al estado de autenticación
    this.authSubscription = this.authService.getAuthStatus().subscribe((authStatus: boolean) => {
      this.isAuthenticated = authStatus;
    });
  }

  logout(): void {
    this.authService.logout();
    this.router.navigate(['/auth']);
  }

  ngOnDestroy() {
    // Cancelamos la suscripción para evitar posibles fugas de memoria
    if (this.authSubscription) {
      this.authSubscription.unsubscribe();
    }
  }
}
