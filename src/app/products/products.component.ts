import { Component, OnInit } from "@angular/core";
import { ProductsService } from "../services/products.service";
import { product } from "../models/product";
import { MatDialog } from "@angular/material";
import { ReviewDialogComponent } from "../dashboards/review-dialog/review-dialog.component";

@Component({
  selector: "app-products",
  templateUrl: "./products.component.html",
  styleUrls: ["./products.component.css"]
})
export class ProductsComponent implements OnInit {
  products;
  order;
  constructor(private productService: ProductsService, public dialog: MatDialog) {
    this.order = {
      customer_name: 'Yousaf',
      price: 500,
      order_time: '08:34 pm',
      items: 2
    };
  }

  openDialog() {
    const ref = this.dialog.open(ReviewDialogComponent, { width: "500px" });
    ref.componentInstance.order = this.order;
  }

  ngOnInit() {
    this.productService.getAll().subscribe(products => {
      this.products = products;
      console.log(this.products);
    });
  }
}
