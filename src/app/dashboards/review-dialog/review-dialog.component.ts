import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-review-dialog',
  templateUrl: './review-dialog.component.html',
  styleUrls: ['./review-dialog.component.css']
})
export class ReviewDialogComponent implements OnInit {

  @Input() order: any;

  constructor() { }

  ngOnInit() {
  }

}
