import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  id: number;
  username: string = "Hamzah"

  constructor(private route: ActivatedRoute, private userService: UsersService) {
  }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.id = +params.id;
    });
  }
  onActivate() {
    this.userService.activatedEmitter.next(true)
  }
  onUpdate(uname) {
    this.username = uname.value
    this.userService.userName.next(uname.value)
  }

  onUpdate2(name) {
    // this.userService.usernName2.next(name.value)
    this.userService.usernName2.next(name.value)

  }

}
