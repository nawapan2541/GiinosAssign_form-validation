import { Component, ContentChild, OnInit, Output, EventEmitter, ViewChild } from '@angular/core';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DetailComponent } from '../detail/detail.component';
import { NavController } from '@ionic/angular';
import { UserService } from '../user.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  showPassword = false;
  formGroup: FormGroup;
  pipe = new DatePipe('en-US');

  constructor(
    public navCtrl: NavController,
    public formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private userData: UserService,
  ) { }

  ngOnInit() {
    this.formGroup = this.formBuilder.group({
      nationId: ["", Validators.compose([
        Validators.maxLength(13),
        Validators.minLength(13),
        Validators.required
      ])],
      email: ["", Validators.compose([
        Validators.required,
        Validators.email,
        Validators.pattern("[A-Za-z0-9._%+-]{3,}@[a-zA-Z]{3,}([.]{1}[a-zA-Z]{2,}|[.]{1}[a-zA-Z]{2,}[.]{1}[a-zA-Z]{2,})"),
      ])],
      password: ["", Validators.compose([
        Validators.minLength(6),
        Validators.required
      ])],
      name: ["",],
      birth: ["",]

    });
  }
  onSubmit(formData: any) {
    const format = 'dd/MM/yyyy';
    // console.log(formData);
    const formatdate = this.pipe.transform(formData.birth, format);

    this.userData.userData = {
      nationId: formData.nationId,
      email: formData.email,
      password: formData.password,
      name: formData.name,
      birth: formatdate,
    };
    this.router.navigate(['detail']);

  }

  formInputIsRequired(formInput: string) {
    if (this.formGroup.controls[formInput]) {
      if (this.formGroup.controls[formInput].hasError('required')) {
        return true;
      }
    }
    return false;
  }







}
