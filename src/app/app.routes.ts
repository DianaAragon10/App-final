import { Routes } from '@angular/router';
import { PostsComponent } from './posts/posts.component';
import { UsersComponent } from './users/users.component';
import { AuthComponent } from './auth/auth.component';

export const routes: Routes = [
    { path: '', redirectTo: '/auth', pathMatch: 'full' },  // Redirige por defecto a /auth
    { path: 'auth', component: AuthComponent },
    { path: 'posts', component: PostsComponent },
    { path: 'users', component: UsersComponent },
];
