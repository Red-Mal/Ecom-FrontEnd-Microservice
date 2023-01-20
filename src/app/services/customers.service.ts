import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Customer} from "../models/customer.model";
import {Router} from "@angular/router";
import {Observable} from "rxjs";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class CustomersService {

  constructor(private http:HttpClient,private router:Router) { }


  onGetCustomers(){
   return this.http.get<Array<Customer>>(environment.backendHost+"/CUSTOMER-SERVICE/customers");
  }


  onGetAccountDetails(c: any) {
    this.router.navigateByUrl("/customers/"+c.id)
  }
  onGetBills(c: any) {
    this.router.navigateByUrl("/customerBills/"+c.id)
  }
}
