import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { CartComponent } from './cart/cart.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { CartService } from './service/cart.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CartComponent,
    SignUpComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [CartService],
  bootstrap: [AppComponent]
})
export class AppModule { }
