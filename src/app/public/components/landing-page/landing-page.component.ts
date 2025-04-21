import { Component } from '@angular/core';
import { ToolbarComponent } from "../toolbar/toolbar.component";
import { TestimonialsComponent } from "../testimonials/testimonials.component";

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css'],
  imports: [ToolbarComponent, TestimonialsComponent]
})
export class LandingPageComponent {
}
