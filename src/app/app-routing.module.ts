import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';


const routes: Routes = [
    {path : 'home' , component : AppComponent},
    {
      path : '' , loadChildren: ()=>{
        return import('./announcement/announcement.module').then(m => m.AnnouncementModule)
      }
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
