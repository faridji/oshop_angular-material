import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../services/products.service';
import { product } from '../models/product';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  products;
  constructor(private productService: ProductsService) { }

  ngOnInit() {
    this.productService.getAll().subscribe(products => {
      this.products = products;
      console.log(this.products)
    })
  }

}
