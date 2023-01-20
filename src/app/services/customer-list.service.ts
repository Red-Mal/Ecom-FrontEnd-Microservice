import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Customer} from "../models/customer.model";

@Injectable({
  providedIn: 'root'
})
export class CustomerListService {

  constructor(private http: HttpClient) { }

  getCustomersMedium() {
    return this.http.get<any>('assets/showcase/data/customers-medium.json')
      .toPromise()
      .then(res => <Customer[]>res.data)
      .then(data => { return data; });
  }
}
