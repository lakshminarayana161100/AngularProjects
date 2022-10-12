import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MenuComponent } from './menu/menu.component';
import { RegistrationComponent } from './registration/registration.component';

const routes: Routes = [
  {
    path:'registration',
    component:RegistrationComponent
  },
  {
    pathMatch:'full',
    component:RegistrationComponent
  },
  {
    path:'menu',
    component:MenuComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const myroutings =[
  RegistrationComponent,
  MenuComponent
]
