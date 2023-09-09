import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AnnouncementRoutingModule } from './announcement-routing.module';
import { LicenseModule } from '../license/license.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    AnnouncementRoutingModule,NgbModule,LicenseModule
  ]
})
export class AnnouncementModule { }
