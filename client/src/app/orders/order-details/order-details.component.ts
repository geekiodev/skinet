import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IBasketTotals } from 'src/app/shared/models/basket';
import { IOrder } from 'src/app/shared/models/order';
import { BreadcrumbService } from 'xng-breadcrumb';
import { OrdersService } from '../orders.service';

@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.component.html',
  styleUrls: ['./order-details.component.scss']
})
export class OrderDetailsComponent implements OnInit {

  order: IOrder;
  orderSummary: IBasketTotals;

  constructor(
    private ordersService: OrdersService,
    private activatedRoute: ActivatedRoute,
    private bcService: BreadcrumbService) {
      this.bcService.set('@orderDetails', '');
     }

  ngOnInit(): void {
    this.loadOrder();
    this.loadSummary();
  }

  loadOrder() {
    this.ordersService.getOrder(+this.activatedRoute.snapshot.paramMap.get('id')).subscribe(order => {
      this.order = order;
      this.bcService.set('@orderDetails', `Order# ${order.id} - ${order.status}`);
    }, error => {
     console.log(error);
   });
  }

  loadSummary(){
    //this.orderSummary.subtotal = this.order.
  }

}
