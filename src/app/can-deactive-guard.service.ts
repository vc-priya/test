import { Injectable } from '@angular/core';

import { CanDeactivate } from '@angular/router';
import {SignUpComponent} from './sign-up/sign-up.component';


@Injectable({
  providedIn: 'root'
})
export class CanDeactiveGuardService implements CanDeactivate<SignUpComponent> {
  canDeactivate(component: SignUpComponent): boolean {
    if (component.customerdata) {
      return confirm('Are you sure?');
    }
    return true;
  } 

  constructor() { }
}
