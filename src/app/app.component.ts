import { Component } from '@angular/core';
import { UsersService } from './rxjs/users.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'RegistrationForm';
  active = false
  username: string = "Hamzah"
  username2: string
  constructor(private userService: UsersService) {
    this.userService.activatedEmitter.subscribe(didActivate => {
      this.active = didActivate
    })
    this.userService.userName.subscribe(uname => {
      this.username = uname
    })
    this.userService.usernName2.subscribe((name) => {
      this.username2 = name
    })

  }
}
