import { Component, OnInit } from '@angular/core';
import {ProductListService} from "../../services/product-list.service";
import {PrimeNGConfig, SelectItem} from "primeng/api";
import {Product} from "../../models/product.model";
import {ProductsService} from "../../services/products.service";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss']
})
export class ProductsListComponent implements OnInit {

  products!: any;

  sortOptions!: SelectItem[];

  sortOrder!: number;

  sortField!: string;

  constructor(private http:HttpClient,private productListService: ProductListService, private primengConfig: PrimeNGConfig,private productService:ProductsService) { }

  ngOnInit() {
    this.listProducts();

   //this.productListService.getProducts().then(data => this.products = data);

    this.sortOptions = [
      {label: 'Price High to Low', value: '!price'},
      {label: 'Price Low to High', value: 'price'}
    ];

    this.primengConfig.ripple = true;
  }

  onSortChange(event:Event) {
    let value = (event.target as HTMLInputElement).value;

    if (value.indexOf('!') === 0) {
      this.sortOrder = -1;
      this.sortField = value.substring(1, value.length);
    }
    else {
      this.sortOrder = 1;
      this.sortField = value;
    }
  }

  listProducts(){
    this.productService.getProducts().subscribe({
      next: (data)=> {
        this.products=data;
      },
      error:(err)=>
      {
        console.log(err);
      }
    });
    console.log(this.products)
  }

}
