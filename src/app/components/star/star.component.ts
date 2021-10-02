import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.css']
})
export class StarComponent implements OnInit, OnChanges {
  starWidth: number = 0;
  @Input() rating: number = 0;
  @Output() ratingClicked: EventEmitter<string>;

  constructor() {
    this.ratingClicked = new EventEmitter<string>();
  }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.starWidth = 75 / 5 * this.rating;
  }

  handleClick(): void {
    this.ratingClicked.emit(`The rating ${this.rating} was clicked!`);
  }
}
