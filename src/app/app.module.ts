import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from "@angular/common/http";

import { AppComponent } from './app.component';
import { ShowBlogsComponent } from './show-blogs/show-blogs.component';
import { GetBlogsservice } from './get-blogs.service';

@NgModule({
  declarations: [
    AppComponent,
    ShowBlogsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [GetBlogsservice],
  bootstrap: [AppComponent]
})
export class AppModule { }
