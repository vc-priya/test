import { Component, OnInit } from '@angular/core';

import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { AuthguardService } from '../authguard.service';
import { SnackbarService } from '../snackbar.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  customerdata1: any = [];
  regForm: any;
  loading:false;

  constructor(private router: Router,private auth :AuthguardService,private snackbar :SnackbarService) { }

  ngOnInit() {
      this.regForm = new FormGroup({
        email: new FormControl('', [Validators.required]),
        pass: new FormControl('', [
          Validators.required,
          Validators.minLength(6),
          Validators.maxLength(20)
        ]),
      })   
  }

  submit() {
    if (this.regForm.valid) {
   
      this.auth.sendToken(this.regForm.value.email);
      this.snackbar.SnackBar("hii","login");
      this.router.navigate(['/home']);
    } else {
      console.log("Invalidate user");
    }
  }
}















