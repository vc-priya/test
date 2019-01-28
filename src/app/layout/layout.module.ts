import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutRoutingModule } from './layout-routing.module';
import {MatToolbarModule,MatButtonModule,MatIconModule,} from '@angular/material';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    LayoutRoutingModule,
    MatToolbarModule,
    MatButtonModule,
   MatIconModule,
  ]
})
export class LayoutModule { }
