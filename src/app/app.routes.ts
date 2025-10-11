import {RouterModule, Routes} from '@angular/router';
import { HomeComponent} from './home-component/home-component';
import {NgModule} from '@angular/core';
import {AppetizerComponent} from './appetizer-component/appetizer-component';
import {EntreeComponent} from './entree-component/entree-component';
import {DessertComponent} from './dessert-component/dessert-component';

export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'appetizer', component: AppetizerComponent },
  { path: 'entree', component: EntreeComponent },
  { path: 'dessert', component: DessertComponent },
  { path: '**', redirectTo: '/home' } // fallback route];
]

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    scrollPositionRestoration: 'enabled',
    // anchorScrolling: 'enabled'
  })],
  exports: [RouterModule]
})

export class AppRoutingModule {}
