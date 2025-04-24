import { Component } from '@angular/core';
import {NgOptimizedImage} from '@angular/common';

@Component({
  selector: 'app-product-features',
  imports: [
    NgOptimizedImage
  ],
  templateUrl: './product-features.component.html',
  standalone: true,
  styleUrl: './product-features.component.css'
})
export class ProductFeaturesComponent {

}
