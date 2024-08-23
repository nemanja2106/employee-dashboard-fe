import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {WidgetsModule} from "./modules/widgets/widgets.module";
import {provideHttpClient} from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    WidgetsModule
  ], exports: [AppComponent],
  providers: [provideHttpClient()],
  bootstrap: [AppComponent]
})
export class AppModule { }
