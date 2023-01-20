import {APP_INITIALIZER, NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductsComponent } from './components/products/products.component';
import { CustomersComponent } from './components/customers/customers.component';
import {HttpClientModule} from "@angular/common/http";
import { AccountDetailsComponent } from './components/account-details/account-details.component';
import { BillsComponent } from './components/bills/bills.component';
import { BillDetailsComponent } from './components/bill-details/bill-details.component';
import {KeycloakAngularModule, KeycloakService} from "keycloak-angular";
import { NavbarComponent } from './components/navbar/navbar.component';
import { ProductsListComponent } from './components/products-list/products-list.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {DataViewModule} from "primeng/dataview";
import {PanelModule} from "primeng/panel";
import {InputTextModule} from "primeng/inputtext";
import {RippleModule} from "primeng/ripple";
import {FormsModule} from "@angular/forms";
import {RatingModule} from "primeng/rating";
import {ButtonModule} from "primeng/button";
import {DropdownModule} from "primeng/dropdown";
import {DialogModule} from "primeng/dialog";
import { CustomerListComponent } from './components/customer-list/customer-list.component';
import {TableModule} from "primeng/table";
import {SliderModule} from "primeng/slider";
import {ContextMenuModule} from "primeng/contextmenu";
import {ProgressBarModule} from "primeng/progressbar";
import {ToastModule} from "primeng/toast";
import {MultiSelectModule} from "primeng/multiselect";
import {CalendarModule} from "primeng/calendar";
import {BadgeModule} from "primeng/badge";

export function kcFactory(kcService:KeycloakService) {
  return ()=>{

    kcService.init({
      config:{
        realm:"master",
        clientId:"product-app",
        url:"http://localhost:8080"
      },
      initOptions:{
        onLoad:"check-sso",
        checkLoginIframe:true
      }
      }

    )
  }
}
@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    CustomersComponent,
    AccountDetailsComponent,
    BillsComponent,
    BillDetailsComponent,
    NavbarComponent,
    ProductsListComponent,
    CustomerListComponent

  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        KeycloakAngularModule,
        BrowserModule,
        BrowserAnimationsModule,
        DataViewModule,
        PanelModule,
        DialogModule,
        DropdownModule,
        InputTextModule,
        ButtonModule,
        RippleModule,
        RatingModule,
        FormsModule,
        TableModule,
        CalendarModule,
        SliderModule,
        MultiSelectModule,
        ContextMenuModule,
        ToastModule,
        ProgressBarModule,
        BadgeModule,

    ],
  providers: [
    {
      provide:APP_INITIALIZER,deps:[KeycloakService],useFactory:kcFactory,multi:true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
