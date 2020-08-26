import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(public userService: UserService) { }

  username = '';
  password = '';

  ngOnInit() {
    this.userService.clearData();
  }

  onLogin() {
    this.userService.login(this.username, this.password);
  }

  onRegister() {
    this.userService.register(this.username, this.password);
  }
}
