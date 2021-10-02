import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  title = 'JavaRemoteLT8Angular';
  someVariable = 'Mindaugas';
  paragraph = 'red';
  showMessage: boolean = false;
  buttonText: string = 'Click me to the message!';
  inputText: string = 'Initial value';

  arr: number[] = [1, 2, 3, 4];
  productUrl = 'https://images.unsplash.com/photo-1631983932474-c8417aacc693?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=387&q=80'

  constructor() { }

  ngOnInit(): void {
  }

  getSomeString(): string {
    return "Some String";
  }

  handleClick($e: MouseEvent) {
    console.log($e);
    // alert("vsdvdv");

    // if(this.showMessage) this.showMessage = false;
    // else this.showMessage = true;

    this.showMessage = !this.showMessage;
    this.buttonText = this.buttonText === "Hide the message"
      ? 'Click me to the message!'
      : 'Hide the message';
  }
}
