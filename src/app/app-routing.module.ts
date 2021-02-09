import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { PostComponent } from './components/post/post.component';
import { UserComponent } from './components/user/user.component';


const routes: Routes = [
  { path:'', component: UserComponent },
  { path:'about', component: AboutComponent},
  { path:'posts', component: PostComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
