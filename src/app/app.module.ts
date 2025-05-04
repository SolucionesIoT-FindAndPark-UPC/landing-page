import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { MaterialModule } from '../shared/material.module';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import { RouterModule } from '@angular/router';
import {FormsModule} from "@angular/forms";

import { LandingPageComponent } from './public/components/landing-page/landing-page.component';
import { FooterComponent } from './public/components/footer/footer.component';
import { PageNotFoundComponent } from './public/components/page-not-found/page-not-found.component';
import { TestimonialsComponent } from './public/components/testimonials/testimonials.component';
import { ToolbarComponent } from './public/components/toolbar/toolbar.component';
import { FaqComponent } from './public/components/faq/faq.component';
import {AboutTheProductComponent} from "./public/components/about-the-product/about-the-product.component";
import {ProductFeaturesComponent} from './public/components/product-features/product-features.component';
import { EndorsedByComponent } from './public/components/endorsed-by/endorsed-by.component';
import { AboutUsComponent } from './public/components/about-us/about-us.component';
import { ContactUsComponent } from './public/components/contact-us/contact-us.component';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    FooterComponent,
    AppRoutingModule,
    MaterialModule,
    HttpClientModule,
    FormsModule,
    RouterModule,
    ToolbarComponent,
    PageNotFoundComponent,
    TestimonialsComponent,
    LandingPageComponent,
    FaqComponent,
    AboutTheProductComponent,
    ProductFeaturesComponent,
    EndorsedByComponent,
    AboutUsComponent,
    ContactUsComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
