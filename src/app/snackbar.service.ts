import { Injectable } from '@angular/core';

import {MatSnackBar} from '@angular/material';

@Injectable({
  providedIn: 'root'
})
export class SnackbarService {

  constructor(private snackbar:MatSnackBar) { }

  SnackBar(message:string,action:string){
    this.snackbar.open(message,action,{duration:2000});
  }
}
