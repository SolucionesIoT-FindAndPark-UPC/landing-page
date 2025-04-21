import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, HostListener } from '@angular/core';

interface Testimonial {
  avatar: string;
  name: string;
  rating: number;
  content: string;
  role?: string;
  company?: string;
}

@Component({
  selector: 'app-testimonials',
  imports: [CommonModule],
  templateUrl: './testimonials.component.html',
  styleUrls: ['./testimonials.component.css']
})
export class TestimonialsComponent {
  testimonials: Testimonial[] = [
    {
      avatar: 'https://randomuser.me/api/portraits/women/44.jpg',
      name: 'Sarah Johnson',
      rating: 5,
      content: "The level of service provided by this website has been outstanding. They consistently exceed expectations and deliver exceptional results. I highly recommend them to anyone looking for quality service!"
    },
    {
      avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
      name: 'David Chen',
      rating: 4,
      content: "I've had an excellent experience with this platform. Their service is top-notch, always exceeding my expectations. I’ve seen great results, and I wouldn’t hesitate to recommend them!"
    },
    {
      avatar: 'https://randomuser.me/api/portraits/women/63.jpg',
      name: 'Maria Rodriguez',
      rating: 5,
      content: "I am thoroughly impressed with the exceptional quality of service provided here. They go above and beyond to deliver fantastic results. Highly recommended for anyone seeking reliable and outstanding service!"
    },
    {
      avatar: 'https://randomuser.me/api/portraits/men/75.jpg',
      name: 'James Wilson',
      rating: 3,
      content: "From start to finish, this website has consistently delivered outstanding service. Their attention to detail and commitment to quality has exceeded my expectations. I wholeheartedly recommend them!"
    },
    {
      avatar: 'https://randomuser.me/api/portraits/women/28.jpg',
      name: 'Emily Park',
      rating: 5,
      content: "The service from this website has been remarkable. They've gone above and beyond to meet my needs, and the results speak for themselves. I would highly recommend their services to others!"
    }
  ];

  selectedIndex: number | null = null;

  selectTestimonial(index: number): void {
    this.selectedIndex = this.selectedIndex === index ? null : index;
  }
}