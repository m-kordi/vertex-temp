import { Component, HostListener } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-mobilemenu',
  templateUrl: './mobilemenu.component.html',
  styleUrl: './mobilemenu.component.css'
})
export class MobilemenuComponent {
  constructor(private router: Router){}
    goToHome() {
      this.router.navigate(['']);
    }

  menuOpen = false;
  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }
    @HostListener('document:keydown.escape', ['$event'])
  handleEscapeKey(event: KeyboardEvent) {
    if (this.menuOpen) {
      this.toggleMenu();
    }
  }
}

