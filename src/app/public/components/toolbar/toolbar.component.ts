import { Component } from '@angular/core';
import {Router} from '@angular/router';
import {FaIconComponent} from '@fortawesome/angular-fontawesome';
import {faBars, faHamburger} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  standalone: true,
  imports: [
    FaIconComponent
  ],
  styleUrl: './toolbar.component.css'
})
export class ToolbarComponent {
  protected readonly faBars = faBars;
  sideMenuOpen = false;

  openSideMenu() {
    this.sideMenuOpen = true;
  }
  closeSideMenu() {
    this.sideMenuOpen = false;
  }
}
