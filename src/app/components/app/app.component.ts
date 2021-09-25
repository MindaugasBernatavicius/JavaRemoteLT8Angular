import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  // templateUrl: './app.component.html',
  // styleUrls: ['./app.component.css']
  template: `
    <app-header></app-header>
    <h1>Hello world!</h1>
    <p id="title">{{ title }}</p>
    <p>{{ someVariable }}</p>
    <span class="xyz">App component text</span>
    <p> {{ someVariable + ' :: ' + getSomeString() }}</p>
    <p> {{ 1 + 1 }}</p>
    <img [src]="productUrl" alt="blueberries"/>
  `,
  styles: ['p#title{color: red}']
})
export class AppComponent {
  title = 'JavaRemoteLT8Angular';
  someVariable = 'Mindaugas';
  paragraph = 'red';

  productUrl = 'https://images.unsplash.com/photo-1631983932474-c8417aacc693?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=387&q=80'

  getSomeString(): string {
    return "Some String";
  }
}
