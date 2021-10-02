import { Injectable } from '@angular/core';
import { IProduct } from "../models/IProduct";

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private products: IProduct[] = [
    {id: 515, title: `Shoe A`, count: 150, price: 2.25, rating: 3.75},
    {id: 50, title: `ShoE&B`, count: 200, price: 3959595.75, rating: 4.00},
    {id: 12, title: `Shoe XXL%`, count: 595, price: 2.001, rating: 3.25},
    {id: 1499, title: `Shoe XXS%`, count: 595, price: 2.001, rating: 2.75},
  ];

  constructor() { }

  getProducts(): IProduct[]{
    return this.products;
  }

  getProductById(id: number): IProduct {
    return this.products.filter(p => p.id === id)[0];
  }
}
