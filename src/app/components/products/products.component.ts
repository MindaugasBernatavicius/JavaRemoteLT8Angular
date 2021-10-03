import {Component, OnInit, ViewChild} from '@angular/core';
import {ProductService} from "../../services/product.service";
import {IProduct} from "../../models/IProduct";
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  text: string = '';
  products: IProduct[] = [];
  filteredProducts: IProduct[] = [];
  @ViewChild('productCreationForm') private productCreationForm!: NgForm;

  constructor(private ps: ProductService) {}

  ngOnInit(): void {
    this.ps.getProducts().subscribe(
      res => {
        this.products = res;
        this.filteredProducts = this.products;
      },
      err => console.log(err)
    );
  }

  filterProducts($event: Event) {
    const val = ($event.target as HTMLInputElement).value.toLocaleLowerCase();
    this.filteredProducts = this.products.filter(p => p.title.toLocaleLowerCase().indexOf(val) !== -1)
  }

  onRatingClicked($event: string) {
    this.text = $event;
  }

  formHandlingMethod($event: MouseEvent): void {
    if (this.productCreationForm.valid) {
      this.ps.createProduct(this.productCreationForm.value).subscribe(
        res => {
          this.ps.getProducts().subscribe(
            res2 => {
              this.products = res2;
              this.filteredProducts = res2; // TODO:: filtering will not work, add filtervalue in the class and set it
            },
            err => console.log(err)
          );
        },
        err => console.log(err),
      );
    }
    this.productCreationForm.resetForm();
  }
}
