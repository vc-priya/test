import { Component, OnInit } from '@angular/core';

import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SessionStorageService, LocalStorageService, LocalStorage, SessionStorage } from 'angular-web-storage';
import { SnackbarService } from '../snackbar.service';



@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  regForm: any;
  customerdata: any = [];

  constructor(private router: Router, public session: SessionStorageService,public snackbar: SnackbarService) {}

  ngOnInit() {
    this.regForm = new FormGroup({
      fname: new FormControl('priya', [Validators.required]),
      lname: new FormControl('bhatti', [Validators.required]),
      email: new FormControl('p@b.com', [Validators.required]),
      pass: new FormControl('123456789', [
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(20)
      ]),
      cpass: new FormControl('123456789', [
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(20)]),
      gender: new FormControl('Male', [Validators.required]),
    });
  }

  submit() {
    if (!this.regForm.valid) {
      console.log("invalid form");
    } else {
      const userData = { 'email': 'p@b.com','pass':'123456','cpass':'123456',gender:'male' };
      localStorage.setItem('userData', JSON.stringify(userData));
    }
   }

  login() {
    {
      this.snackbar.SnackBar("hii","sign-up");
      this.router.navigate(['/login']);
    }
}
canDeactivate() {
  return this.customerdata.results.length > 0;
}
}
