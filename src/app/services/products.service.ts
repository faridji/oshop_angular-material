import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';

import { product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private db: AngularFireDatabase) { }

  getAll() {
    return this.db.object('/products').valueChanges();
  }
}
