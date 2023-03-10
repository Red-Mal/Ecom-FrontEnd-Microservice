import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ProductsComponent} from "./components/products/products.component";
import {CustomersComponent} from "./components/customers/customers.component";
import {AccountDetailsComponent} from "./components/account-details/account-details.component";
import {BillsComponent} from "./components/bills/bills.component";
import {BillDetailsComponent} from "./components/bill-details/bill-details.component";
import {AuthGuard} from "./guards/security.guard";
import {ProductsListComponent} from "./components/products-list/products-list.component";
import {CustomerListComponent} from "./components/customer-list/customer-list.component";


const routes: Routes = [
  {path: "products", component: ProductsComponent,canActivate:[AuthGuard],data:{roles :['ADMIN','USER']}},
  {path: "customers", component:CustomersComponent,canActivate:[AuthGuard],data:{roles :['ADMIN']}},
  {path: "customers/:customerId", component:AccountDetailsComponent,canActivate:[AuthGuard],data:{roles :['ADMIN']}},
  {path: "customerBills/:customerId", component:BillsComponent},
  {path: "bills/:id", component:BillDetailsComponent,canActivate:[AuthGuard],data:{roles :['ADMIN','USER']}},
  {path: "productsList", component: ProductsListComponent},
  {path: "customersList", component: CustomerListComponent},



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
