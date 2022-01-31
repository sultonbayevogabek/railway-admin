import { Component, OnInit } from '@angular/core'

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})

export class SidebarComponent implements OnInit {
  public isSidebarOpen: Boolean = true

  constructor() {}

  ngOnInit(): void {
    if (localStorage.getItem('isSidebarOpen')) {
      // @ts-ignore
      this.isSidebarOpen = JSON.parse(localStorage.getItem('isSidebarOpen'))
    }

    const accordionItems = document.querySelectorAll('.accordion__item')
    accordionItems.forEach(accordionItem => {
      accordionItem.addEventListener('click', e => {
        // @ts-ignore
        if (!e.target.classList.contains('accordion-inner') && !e.target.classList.contains('accordion-inner__link')) {
          if (accordionItem.classList.contains('accordion__item--active')) {
            return accordionItem.classList.remove('accordion__item--active')
          }
          accordionItems.forEach(element => {
            element.classList.remove('accordion__item--active')
          })
          accordionItem.classList.add('accordion__item--active')
        }
      })
    })
  }

  toggleSidebar() {
    this.isSidebarOpen = !this.isSidebarOpen
    localStorage.setItem('isSidebarOpen', JSON.stringify(this.isSidebarOpen))
    document.querySelectorAll('.accordion__item').forEach(element => element.classList.remove('accordion__item--active'))
  }

  openSidebarOnHover() {
    const sidebar: any = document.querySelector('.sidebar')
    sidebar.classList.remove('sidebar--close')
  }

  closeSidebarOnLeave() {
    if (!this.isSidebarOpen) {
      let sidebar: any = document.querySelector('.sidebar')
      sidebar.classList.add('sidebar--close')
      document.querySelectorAll('.accordion__item').forEach(element => {
        element.classList.remove('accordion__item--active')
      })
    }
  }
}
