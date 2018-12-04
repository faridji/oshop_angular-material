import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router'
import { AppComponent } from './app.component';
import { MaterialCompModule } from './material-comp/material-comp.module';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { MyOrdersComponent } from './my-orders/my-orders.component';
import { OrdersComponent } from './admin/orders/orders.component';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireModule } from 'angularfire2'
import { environment } from 'src/environments/environment';
import { AdminProductsComponent } from './admin/admin-products/admin-products.component';
import { ProductsComponent } from './products/products.component';
import { AuthService } from './services/auth.service';
import { OrdersService } from './services/orders.service';
import { ProductsService } from './services/products.service';

@NgModule({
  declarations: [
    AppComponent,
    ShoppingCartComponent,
    MyOrdersComponent,
    OrdersComponent,
    AdminProductsComponent,
    ProductsComponent
  ],
  imports: [
    BrowserModule,
    MaterialCompModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    RouterModule.forRoot([

      { path: '', redirectTo: "products", pathMatch: "full" },
      { path: 'my-orders', component: MyOrdersComponent },
      { path: 'admin/orders', component: OrdersComponent },
      { path: 'admin/products', component: AdminProductsComponent },
      { path: 'products', component: ProductsComponent },
      { path: 'shopping-cart', component: ShoppingCartComponent },

    ])
  ],
  providers: [AuthService, OrdersService, ProductsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
