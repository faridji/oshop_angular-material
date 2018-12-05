import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-admin-products',
  templateUrl: './admin-products.component.html',
  styleUrls: ['./admin-products.component.css']
})
export class AdminProductsComponent implements OnInit {
  products;
  constructor(private router: Router, private productService: ProductsService) { }

  addProduct() {
    this.router.navigate(['admin/products/new']);
  }
  ngOnInit() {
    this.productService.getAll().subscribe(products => {
      this.products = products;
    })
  }

}
