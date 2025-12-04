import { Component, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-new-user',
  imports: [FormsModule],
  templateUrl: './new-user.html',
  styleUrl: './new-user.css',
})
export class NewUserComponent {
  @Output() createUser = new EventEmitter<string>();
  @Output() cancel  =  new  EventEmitter();

  enteredName = '';

  onCancel(){
    this.cancel.emit();
  }

onCreateUser() {
this.createUser.emit(this.enteredName);
}
}
