import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  // templateUrl: './app.component.html',
  // styleUrls: ['./app.component.css']
  template: `
    <app-header></app-header>
    <div class="container py-4">
      <router-outlet></router-outlet>
    </div>
  `,
  styles: ['p#title{color: red}']
})
export class AppComponent {
}
