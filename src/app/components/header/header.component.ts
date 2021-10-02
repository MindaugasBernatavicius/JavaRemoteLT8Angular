import {Component, OnDestroy, OnInit} from '@angular/core';

@Component({
  selector: 'app-header',
  template: `
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <div class="container-fluid">
        <img class="navbar-brand" src="https://getbootstrap.com/docs/5.0/assets/brand/{{bootstrapLogo}}" width="30" height="35" alt=""/>
        <a class="navbar-brand" [routerLink]="['/home']">
          <span class="xyz">Navbar text</span>
        </a>

        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarText">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <a class="link-gy nav-link" [routerLinkActive]="['active']" [routerLink]="['/home']">Home</a>
            </li>
            <li class="nav-item">
              <a class="link-gy nav-link" [routerLinkActive]="['active']" [routerLink]="['/products']">Products</a>
            </li>
            <li class="nav-item">
              <a class="link-gy nav-link" [routerLinkActive]="['active']" [routerLink]="['/about']">About</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  `,
  styles: ['.xyz { color: greenyellow }', ' .link-gy.nav-link.active { color: greenyellow; }']
})
export class HeaderComponent implements OnInit {

  bootstrapLogo = 'bootstrap-logo.svg';

  constructor() {
    console.log("Constructor!");
  }

  ngOnInit(): void {
    console.log("OnInit!");
  }
}
