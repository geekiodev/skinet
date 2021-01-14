import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrdersComponent } from './orders.component';
import { SharedModule } from '../shared/shared.module';
import { OrdersRoutingModule } from './orders-routing.module';
import { FormsModule } from '@angular/forms';
import { OrderDetailsComponent } from './order-details/order-details.component';



@NgModule({
  declarations: [OrdersComponent, OrderDetailsComponent],
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    OrdersRoutingModule
  ]
})
export class OrdersModule { }
