import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Location, DatePipe } from '@angular/common';
import { UserService } from '../user.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss'],
  providers: [DatePipe]
})
export class DetailComponent implements OnInit {
  nationId: any;
  email: any;
  password: any;
  name: any;
  birth: any;
  formatDate: any;
  constructor(
    private location: Location,
    private userData: UserService,
    public datepipe: DatePipe,
  ) {
  }

  ngOnInit() {
    const format = 'dd/MM/yyyy';
    this.nationId = this.userData.userData.nationId;
    this.email = this.userData.userData.email;
    this.password = this.userData.userData.password;
    this.name = this.userData.userData.name;
    this.birth = this.userData.userData.birth;
    this.formatDate = this.datepipe.transform(this.birth, format);
    console.log(this.birth);
    // this.route.paramMap.subscribe((params: ParamMap) => {
    //   this.formData = +params.get('formData');

    // });
  }

  onRegister() {

  }

  onHome() {
    console.log('navigate');
    this.location.back();

  }

}
