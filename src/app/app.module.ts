import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AnnouncementRoutingModule } from './announcement/announcement-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AgGridModule } from 'ag-grid-angular';
import { AnnouncementComponent } from './announcement/announcement.component';
@NgModule({
  declarations: [AppComponent,AnnouncementComponent],
  
  imports: [
  CommonModule,
    HttpClientModule,
    AgGridModule,
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    AnnouncementRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
