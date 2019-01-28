import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import{AuthguardService} from './authguard.service';
import { HeaderComponent } from './header/header.component';
import { CanDeactiveGuardService } from './can-deactive-guard.service';




const routes: Routes = [

  {path:'home', loadChildren:'./home/home.module#HomeModule'},
  {path:'login',loadChildren:'./login/login.module#LoginModule'},
  {path:'sign-up',loadChildren:'./sign-up/sign-up.module#SignUpModule'},
  {path:'',redirectTo:'/login', pathMatch:'full',canDeactivate:[CanDeactiveGuardService]},
  {path:'header',component:HeaderComponent}
 

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
