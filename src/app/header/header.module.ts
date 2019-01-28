import { NgModule,OnInit,Output,EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeaderRoutingModule } from './header-routing.module';
import { HeaderComponent } from './header.component';
import {MatToolbarModule} from '@angular/material';
import {MatButtonModule} from '@angular/material';

@NgModule({
  declarations: [HeaderComponent],
  imports: [
    CommonModule,
    HeaderRoutingModule,
    MatToolbarModule,
    MatButtonModule
  ]
})
export class HeaderModule implements OnInit {
 

  constructor(){}
  ngOnInit(){}

 
  }
 
 
