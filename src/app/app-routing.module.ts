import { NgModule } from '@angular/core';
import { Route, RouterModule, Routes } from '@angular/router';
import { FirstComponent } from './first/first/first.component';
import { SecondComponent } from './second/second.component';

const firstRoute: Route = {
  path: 'first', component: FirstComponent
}

const routes: Routes = [
  firstRoute,
  {path : 'second', component: SecondComponent, outlet: "secondary" },
  { path: 'lazy', loadChildren: () => import('./lazy/lazy/lazy.module').then(m => m.LazyModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {enableTracing: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
