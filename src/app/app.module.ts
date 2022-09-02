import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyFirstComponent } from './components/myfirst.component';
import { Myfirst2Component } from './components/myfirst2/myfirst2.component';


@NgModule({
  declarations: [
    AppComponent,
    MyFirstComponent,
    Myfirst2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
