import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Location, DatePipe } from '@angular/common';
import { UserService } from '../user.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss'],
})
export class DetailComponent implements OnInit {

  nationId: any;
  email: any;
  password: any;
  name: any;
  birth: any;
  constructor(
    private location: Location,
    private userData: UserService,
  ) {
  }

  ngOnInit() {

    this.nationId = this.userData.userData.nationId;
    this.email = this.userData.userData.email;
    this.password = this.userData.userData.password;
    this.name = this.userData.userData.name;
    this.birth = this.userData.userData.birth;
    console.log(this.birth);
    // this.route.paramMap.subscribe((params: ParamMap) => {
    //   this.formData = +params.get('formData');

    // });
  }



  onHome() {
    console.log('navigate');
    this.location.back();

  }

}
