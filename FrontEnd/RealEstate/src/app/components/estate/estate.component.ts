import { Component, OnInit } from '@angular/core';
import { EstateService } from 'src/app/services/estate.service';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-estate',
  templateUrl: './estate.component.html',
  styleUrls: ['./estate.component.css']
})
export class EstateComponent implements OnInit {

  constructor(public estateService: EstateService,
              private route: ActivatedRoute,
              private router: Router,
              private userService: UserService) {
                if (!this.userService.token) {
                  this.router.navigate(['/login']);
                } else {
                  console.log(this.userService.token);
                  this.estateService.setSingleEstate(this.route.snapshot.paramMap.get('external_id'));
                }
               }

              responsiveOptions: any[] = [
                {
                    breakpoint: '1024px',
                    numVisible: 5
                },
                {
                    breakpoint: '768px',
                    numVisible: 3
                },
                {
                    breakpoint: '560px',
                    numVisible: 1
                }
            ];
    displayCustom: boolean;

    activeIndex = 0;

  ngOnInit() {
  }

 backToList() {
  this.router.navigate(['/ingatlanok/lista']);
 }



}
