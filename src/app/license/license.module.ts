import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { AgGridModule } from 'ag-grid-angular';
import { LicenseRoutingModule } from './license-routing.module';
import { LicenseComponent } from './license.component';

@NgModule({
  declarations: [LicenseComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    AgGridModule,
    LicenseRoutingModule,
  ],
  providers: [],
})
export class LicenseModule {}
