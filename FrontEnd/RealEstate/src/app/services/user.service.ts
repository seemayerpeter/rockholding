import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import {Router} from '@angular/router'

@Injectable({
  providedIn: 'root'
})
export class UserService {

  token: string = null;
  error: string = null;


  constructor(private http: HttpClient,
              private router: Router) { }

  login(username: string, password: string) {
    const formdata = new FormData();
    formdata.append('username', username);
    formdata.append('password', password);

    this.http.post('http://localhost:8000/api/login', formdata).subscribe((data: any) => {
        this.token = data.token;
        this.router.navigate(['/ingatlanok/lista']); },
        (errors: HttpErrorResponse) => this.error = errors.error);

  }


  register(username: string, password: string) {
    const formdata = new FormData();
    formdata.append('username', username);
    formdata.append('password', password);

    this.http.post('http://localhost:8000/api/register', formdata).subscribe((data: any) => {
      this.token = data.token;
      this.router.navigate(['/ingatlanok/lista']); },
      (errors: HttpErrorResponse) => this.error = errors.error);
  }

  clearData() {
    this.token = null;
    this.error = null;
  }

}
