import { Component, ContentChild, OnInit } from '@angular/core';
import { IonInput } from '@ionic/angular';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  showPassword = false;
  regisForm: FormGroup;


  constructor(
    // public formBuilder: FormBuilder,

  ) { }

  ngOnInit() {
    // this.regisForm = this.formBuilder.group({
    //   nationId: ["", Validators.required, Validators.maxLength(13)],
    //   email: ["", Validators.required],
    //   password: ["", Validators.required]

    // });
  }








}
