import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './public/components/landing-page/landing-page.component';
import { PageNotFoundComponent } from "./public/components/page-not-found/page-not-found.component";

const routes: Routes = [
  {path: '', component: LandingPageComponent },
  {path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [
      RouterModule.forRoot(routes, {
        scrollPositionRestoration: 'top',
        anchorScrolling: 'enabled'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
