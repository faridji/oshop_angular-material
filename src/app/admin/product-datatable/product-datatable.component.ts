import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'product-datatable',
  templateUrl: './product-datatable.component.html',
  styleUrls: ['./product-datatable.component.css']
})
export class ProductDatatableComponent implements OnInit {

  @Input('product') product;
  dataSource;
  displayedColumns: string[] = ['title', 'price', 'category'];

  constructor() { }

  ngOnInit() {
    this.dataSource = this.product;
    console.log(this.dataSource)
  }

}
