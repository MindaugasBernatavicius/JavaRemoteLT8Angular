import {Component, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {ProductService} from "../../services/product.service";
import {IProduct} from "../../models/IProduct";
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  product: IProduct | undefined
  @ViewChild('f') private myForm!: NgForm;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private ps: ProductService) { }

  ngOnInit(): void {
    const id = +this.activatedRoute.snapshot.paramMap.get('id')!;
    this.ps.getProductById(id).subscribe(
    res => this.product = res,
    err => console.log(err)
    )
  }

  onBack() {
    this.router.navigate(['/products']);
  }

  onClick() {
    // console.log(this.myForm.value)
  }

  onSubmitProduct(_product: IProduct | undefined) {
    console.log(_product)
    this.ps.updateProduct(_product!).subscribe(
      res => this.product = _product,
      err => console.log(err)
    )
  }

  onSubmit(f: NgForm) {
    console.log(f.value)
  }
}
