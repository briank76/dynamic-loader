import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoaderComponent } from './loader/loader.component';
import { Test1Component } from './test1/test1.component';
import { Test2Component } from './test2/test2.component';
import { DynamicComponentBase } from './dynamicComponentBase/dynamic-base-component';

@NgModule({
  declarations: [
    AppComponent,
    LoaderComponent,
    Test1Component,
    Test2Component,
    DynamicComponentBase
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
