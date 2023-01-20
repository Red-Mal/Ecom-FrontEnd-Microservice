import { Component, OnInit } from '@angular/core';
import {CustomerListService} from "../../services/customer-list.service";
import {Customer} from "../../models/customer.model";


@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {

  customers1!: Customer[];

  customers2!: Customer[];

  selectedCustomer1!: Customer;

  selectedCustomer2!: Customer;

  constructor(private customerListService: CustomerListService) { }

  ngOnInit() {
    this.customerListService.getCustomersMedium().then(data => this.customers1 = data);
    this.customerListService.getCustomersMedium().then(data => this.customers2 = data);
  }

}
