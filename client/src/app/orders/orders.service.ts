import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { IOrder } from '../shared/models/order';
import { IPagination } from '../shared/models/pagination';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {

  baseUrl = 'https://localhost:5001/api/';

  constructor(private http: HttpClient) { }

  getOrdersForUser(){
    
    return this.http.get<IOrder[]>(this.baseUrl + 'orders');
  }

  getOrder(id: number){
    
    return this.http.get<IOrder>(this.baseUrl + 'orders/' + id);
  }
}
