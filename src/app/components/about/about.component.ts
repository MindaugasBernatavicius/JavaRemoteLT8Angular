import {Component, OnDestroy, OnInit} from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit, OnDestroy {

  constructor() {
    console.log("Constructor!")
  }

  ngOnInit(): void {
    console.log("OnInit!")
  }

  ngOnDestroy(): void {
    console.log("OnDestroy!")
  }
}
