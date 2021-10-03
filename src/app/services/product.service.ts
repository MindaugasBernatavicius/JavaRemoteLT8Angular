import { Injectable } from '@angular/core';
import { IProduct } from "../models/IProduct";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  // private products: IProduct[] = [
  //   {id: 515, title: `Shoe A`, count: 150, price: 2.25, rating: 3.75},
  //   {id: 50, title: `ShoE&B`, count: 200, price: 3959595.75, rating: 4.00},
  //   {id: 12, title: `Shoe XXL%`, count: 595, price: 2.001, rating: 3.25},
  //   {id: 1499, title: `Shoe XXS%`, count: 595, price: 2.001, rating: 2.75},
  // ];

  constructor(private httpClient: HttpClient) { }

  getProducts(): Observable<IProduct[]>{
    return this.httpClient.get<IProduct[]>('http://localhost:4567/products');
  }

  getProductById(id: number): Observable<IProduct> {
    // return this.products.filter(p => p.id === id)[0];
    return this.httpClient.get<IProduct>('http://localhost:4567/products/' + id);
  }

  createProduct(product: IProduct): Observable<IProduct> {
    return this.httpClient.post<IProduct>('http://localhost:4567/products', product);
  }

  updateProduct(product: IProduct): Observable<any> {
    return this.httpClient.put<IProduct>('http://localhost:4567/products/' + product.id, product);
  }
}
