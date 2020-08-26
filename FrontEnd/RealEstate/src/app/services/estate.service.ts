import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Estate } from '../model/estate';
import { UserService } from './user.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class EstateService {

  constructor(private http: HttpClient,
              private userService: UserService,
              private router: Router) { }

  public estates: Estate[] = null;
  public singleEstate: Estate = null;

  fetchData() {
    const options = {
      headers: new HttpHeaders({
        token: this.userService.token
      })
    };
    this.http.get('http://localhost:8000/api/ingatlanok', options).subscribe((data: any) => this.estates = data.estate,
                                                                             (error) => this.router.navigate(['/login']));
  }

  setSingleEstate(id: string) {
    if (!this.estates) {
      this.router.navigate(['/login']);
    }
    this.singleEstate = this.estates.find(x => x.external_id === id);

    if (!this.singleEstate) {
      this.router.navigate(['/login']);
    }
  }

}
