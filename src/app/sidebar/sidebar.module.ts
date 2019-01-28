import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';


import {  MatSidenavModule } from '@angular/material';



import { SidebarComponent } from './sidebar.component';

@NgModule({
  declarations: [SidebarComponent],
  imports: [
    CommonModule,
     MatSidenavModule,
  ],
  providers: [],
  exports: [SidebarComponent],
})
export class SidebarModule { }
