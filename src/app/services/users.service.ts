import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
    users = [
    { userId: 1, name: 'Rama' },
    { userId: 2, name: 'Shyama' },
    { userId: 3, name: 'Bhama' },
  ];

  addUser(name: string) {
    console.log(this.users.length);
    const newUserId = this.users.length + 1;
    console.log(newUserId);
    this.users.push({ userId: newUserId, name });
    console.log(this.users)
  }
}