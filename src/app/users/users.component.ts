import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTableModule } from '@angular/material/table';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; // Para animaciones
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-users',
  imports: [MatToolbarModule, MatTableModule, BrowserAnimationsModule],
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users: any[] = [];

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get<any[]>('https://jsonplaceholder.typicode.com/users')
      .subscribe(data => {
        console.log('Datos de Usuarios:', data);
        this.users = data;
      });
  }
}
