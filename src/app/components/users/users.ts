import { Component, Output, EventEmitter, inject } from '@angular/core';
import { UsersService } from "../../services/users.service";

@Component({
  selector: 'app-users',
  imports: [],
  templateUrl: './users.html',
  styleUrl: './users.css',
})
export class UsersComponent {
private usersService = inject(UsersService);
get users() {
  return this.usersService.users; 
}
}
