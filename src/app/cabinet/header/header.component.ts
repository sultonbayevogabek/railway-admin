import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  host: {
    '(document:click)': 'hideDropdown($event)'
  }
})

export class HeaderComponent implements OnInit {
  public isDropdownOpen: Boolean

  constructor() {
    this.isDropdownOpen = false
  }

  hideDropdown(event: any) {
    const target = event.target
    if (
      !target.classList.contains('admin-dropdown') && !target.classList.contains('admin-dropdown__top') &&
      !target.classList.contains('admin-dropdown__bottom') && !target.classList.contains('admin-dropdown__link') &&
      !target.classList.contains('admin-info__left') && !target.classList.contains('admin-img') &&
      !target.classList.contains('admin-avatar') && !target.classList.contains('fas')
    ) {
      this.isDropdownOpen = false
    }
  }

  ngOnInit(): void {
  }
}
