import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { AnnouncementModule } from './announcement/announcement.module';
import { LicenseModule } from './license/license.module';

@NgModule({
  declarations: [AppComponent],

  imports: [ BrowserModule, AppRoutingModule, RouterModule ,AnnouncementModule , LicenseModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
