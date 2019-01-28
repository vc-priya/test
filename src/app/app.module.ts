import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {ReactiveFormsModule } from '@angular/forms';
import {MatNativeDateModule, MatIconModule, MatListModule, MatCheckboxModule} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';


import { ToolbarComponent } from './toolbar/toolbar.component';
import {MatSidenavModule,MatToolbarModule,MatButtonModule,MatSnackBarModule} from '@angular/material';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SidebarComponent } from './sidebar/sidebar.component';




@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
 
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    MatNativeDateModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatButtonModule,
    MatIconModule,
    MatListModule,
    MatCheckboxModule,
    MatSnackBarModule,
    MatToolbarModule
  
  ],
  
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
