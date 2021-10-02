import { Component, OnInit } from '@angular/core';
import {ProductService} from "../../services/product.service";
import {IProduct} from "../../models/IProduct";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  text: string = '';
  products: IProduct[] = [];
  filteredProducts: IProduct[] = [];
  constructor(private ps: ProductService) {}

  ngOnInit(): void {
    this.products = this.ps.getProducts();
    this.filteredProducts = this.products;
  }

  filterProducts($event: Event) {
    const val = ($event.target as HTMLInputElement).value.toLocaleLowerCase();
    this.filteredProducts = this.products.filter(p => p.title.toLocaleLowerCase().indexOf(val) !== -1)
  }

  onRatingClicked($event: string) {
    this.text = $event;
  }
}
