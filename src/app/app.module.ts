import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { MaterialModule } from '../shared/material.module';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import { RouterModule } from '@angular/router';
import {FormsModule} from "@angular/forms";

import { LandingPageComponent } from './public/components/landing-page/landing-page.component';
import { PageNotFoundComponent } from './public/components/page-not-found/page-not-found.component';
import { TestimonialsComponent } from './public/components/testimonials/testimonials.component';
import { FooterComponent } from './public/components/footer/footer.component';
import { ToolbarComponent } from './public/components/toolbar/toolbar.component';
import { FaqComponent } from './public/components/faq/faq.component';
import {AboutTheProductComponent} from "./public/components/about-the-product/about-the-product.component";
import {ProductFeaturesComponent} from './public/components/product-features/product-features.component';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    HttpClientModule,
    FormsModule,
    RouterModule,
    ToolbarComponent,
    PageNotFoundComponent,
    TestimonialsComponent,
    FooterComponent,
    LandingPageComponent,
    FaqComponent,
    AboutTheProductComponent,
    ProductFeaturesComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
