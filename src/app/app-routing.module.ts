import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';

const routes: Routes = [
  { path: 'home', component: AppComponent },
  {
    path: 'announcement',
    loadChildren: () =>
      import('./announcement/announcement.module').then(
        (m) => m.AnnouncementModule
      ),
  },
  {
    path: 'license',
    loadChildren: () =>
      import('./license/license.module').then((m) => m.LicenseModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
