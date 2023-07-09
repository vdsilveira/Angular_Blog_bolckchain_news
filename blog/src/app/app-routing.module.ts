import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LinksComponent } from './pages/links/links.component';

const routes: Routes = [

 {path:"",
  component:HomeComponent
  },
  {path:"links/:id",
  component: LinksComponent

},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
