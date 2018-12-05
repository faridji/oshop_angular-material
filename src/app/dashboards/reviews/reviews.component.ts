import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.css']
})
export class ReviewsComponent implements OnInit {

  states = ['Received', 'Accepted / Rejected', 'Preparing', 'Ready for Pickup', 'Cash Paid', 'Picked Up', 'On the Way', 'Delivered / Problem Reported', 'Cash Collected / Problem Reported']
  values = ['01:24 PM', '01:26 PM', '01:30 PM', '02:00 Pm', '02:04 PM', '02:06 PM']
  constructor() { }

  ngOnInit() {
  }

}
