import { Component } from '@angular/core';
import { Confirmable } from '../decorators/confirmable.decorator';

@Component({
  selector: 'app-user-list',
  template: ` <button (click)="deleteAccount()">Delete My Account</button> `,
})
export class UserListComponent {
  @Confirmable('Are you sure you want to delete your account? This cannot be undone.')
  deleteAccount() {
    console.log('Account deleted successfully!');
  }
}
