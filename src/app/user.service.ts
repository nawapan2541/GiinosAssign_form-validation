import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  nationId: any;
  email: any;
  password: any;
  name: any;
  birth: any;

  userData = {
    nationId: this.nationId,
    email: this.email,
    password: this.password,
    name: this.name,
    birth: this.birth,
  };
  constructor(

  ) { }
}
