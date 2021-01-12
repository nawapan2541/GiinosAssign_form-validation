import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  nationId: String;
  email: String;
  password: String;
  name: String;
  birth: String;

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
