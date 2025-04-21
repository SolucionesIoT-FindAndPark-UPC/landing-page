import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-faq',
  imports: [CommonModule],
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.css']
})
export class FaqComponent implements OnInit {
  faqs = [
    {
      question: 'How do I download the app?',
      answer: 'You can download the app from the App Store or Google Play Store.',
      isOpen: false
    },
    {
      question: 'What payment methods does ParkUp accept?',
      answer: 'ParkUp accepts credit and debit cards.',
      isOpen: false
    },
    {
      question: 'Do I need to print a ticket?',
      answer: 'No, you can simply show your digital ticket in the app.',
      isOpen: false
    },
    {
      question: 'Is ParkUp available in all parking lots?',
      answer: 'ParkUp is available in most major parking lots, but please check our website for availability.',
      isOpen: false
    },
    {
      question: 'Is it safe to pay through the app?',
      answer: 'Yes, we use secure encryption and trusted payment processors to protect your information.',
      isOpen: false
    }
  ];

  constructor() { }

  ngOnInit(): void { }

  toggleAnswer(faq: any): void {
    faq.isOpen = !faq.isOpen; 
  }
}
