import { Component } from '@angular/core';
import { ToolbarComponent } from "../toolbar/toolbar.component";
import { TestimonialsComponent } from "../testimonials/testimonials.component";
import { FaqComponent } from '../faq/faq.component';
import {AboutTheProductComponent} from '../about-the-product/about-the-product.component';
import {ProductFeaturesComponent} from '../product-features/product-features.component';
import { FooterComponent } from '../footer/footer.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css'],
  imports: [ToolbarComponent, TestimonialsComponent, FaqComponent, AboutTheProductComponent, ProductFeaturesComponent, FooterComponent],
})
export class LandingPageComponent {
}
