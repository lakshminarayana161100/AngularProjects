import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { myroutings } from './app-routing.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegistrationComponent } from './registration/registration.component';
import { MenuComponent } from './menu/menu.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatIconModule} from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';
import {MatButtonModule} from '@angular/material/button';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';



@NgModule({
  declarations: [
    AppComponent,
     RegistrationComponent,
    MenuComponent,
    myroutings
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
     ReactiveFormsModule,
     MatToolbarModule,
     MatSidenavModule,
     MatIconModule,
     MatListModule,
     MatButtonModule,
 BrowserAnimationsModule,
 

  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
