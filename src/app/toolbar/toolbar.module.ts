import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ToolbarRoutingModule } from './toolbar-routing.module';
import { ToolbarComponent } from './toolbar.component';
import {MatToolbarModule} from '@angular/material';

@NgModule({
  declarations: [ToolbarComponent],
  imports: [
    CommonModule,
    ToolbarRoutingModule,
    MatToolbarModule
  ]
})
export class ToolbarModule { }
