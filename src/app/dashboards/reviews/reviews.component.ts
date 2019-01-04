import { Component, OnInit } from '@angular/core';
export interface PeriodicElement {
  image: string;
  'item name': string;
  quantity: number,
  unit_price: number;
  promotion: string;
  discount: number,
  total: number
}

const ELEMENT_DATA: PeriodicElement[] = [
  { image: '/assets/burger.jpg', 'item name': 'Checken Mac', quantity: 1, unit_price: 410, promotion: 'Outlet', discount: 7.00, total: 403.00 },
  { image: '/assets/burger.jpg', 'item name': 'Checken Mac', quantity: 1, unit_price: 0, promotion: '', discount: 0, total: 0 },
  { image: '', 'item name': 'Special Request', quantity: 0, unit_price: 0, promotion: '', discount: 0, total: 0 },
];
@Component({
  selector: 'reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.css']
})
export class ReviewsComponent implements OnInit {

  displayedColumns: string[] = ['image', 'item name', 'quantity', 'unit_price', 'promotion', 'discount', 'total'];
  dataSource = ELEMENT_DATA;
  constructor() { }

  ngOnInit() {
  }

}
