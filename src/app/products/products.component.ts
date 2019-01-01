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
  constructor(
    private productService: ProductsService,
    public dialog: MatDialog
  ) { }

  openDialog() {
    this.dialog.open(ReviewDialogComponent, {
      width: "500px",
      height: "80%",
    });
  }

  ngOnInit() {
    this.productService.getAll().subscribe(products => {
      this.products = products;
      console.log(this.products);
    });
  }
}
