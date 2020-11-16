import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ProfileService } from './profile.service';

 // <-- import the module

import { AppComponent } from './app.component';
import { ProfileComponent } from './profile/profile.component';
import { Http, Headers } from '@angular/http';

import { UserDirective } from './user.directive';
import { UserComponent } from './user/user.component';
import {RoutingModule} from './routing/routing.module';


@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    UserDirective,
    UserComponent,
    

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RoutingModule,
    
  ],
  providers: [ProfileService],
  bootstrap: [AppComponent]
})
export class AppModule { }