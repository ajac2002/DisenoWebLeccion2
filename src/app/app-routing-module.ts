import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { PostresComponent } from './pages/postres/postres.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'postres', component: PostresComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
