import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  birth: any;
  userData = {
    nationId: String,
    email: String,
    password: String,
    name: String,
    birth: String,
  };
  constructor(

  ) { }
}
