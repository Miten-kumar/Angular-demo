import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AnnouncementComponent } from './announcement/announcement.component';
import { AnnouncementRoutingModule } from './announcement/announcement-routing.module';


@NgModule({
  declarations: [
    AppComponent,
    AnnouncementComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    AnnouncementRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
