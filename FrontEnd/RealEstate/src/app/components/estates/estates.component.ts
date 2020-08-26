import { Component, OnInit } from '@angular/core';
import { EstateService } from 'src/app/services/estate.service';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-estates',
  templateUrl: './estates.component.html',
  styleUrls: ['./estates.component.css']
})
export class EstatesComponent implements OnInit {

  constructor(public estateService: EstateService,
              private userService: UserService,
              private router: Router) { }

  ngOnInit() {
    if (!this.userService.token) {
      this.router.navigate(['/login']);
    } else {
    this.estateService.fetchData();
    }
  }

}
