import { Component, signal, inject } from '@angular/core';
// import { RouterOutlet } from '@angular/router';
import { UsersComponent } from "./components/users/users";
import { NewUserComponent } from "./components/new-user/new-user";
import { UsersService } from "./services/users.service";

@Component({
  selector: 'app-root',
  imports: [UsersComponent, NewUserComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('project-1');
  private usersService = inject(UsersService);

  isAddUser = false;

  onAddUser() {
    this.isAddUser=true;
  }

  onCancel(){
    this.isAddUser=false;
  }

  onCreateUser(enteredName: string) {
    this.isAddUser=false;
    this.usersService.addUser(enteredName);
  }
}
