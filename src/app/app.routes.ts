import {RouterModule, Routes} from '@angular/router';
import { HomeComponent} from './home-component/home-component';
import {NgModule} from '@angular/core';

export const routes: Routes = [
  {path: 'home', component: HomeComponent},
  //default route
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  // 👇 Wildcard (catch-all for invalid URLs)
  { path: '**', redirectTo: '/home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
