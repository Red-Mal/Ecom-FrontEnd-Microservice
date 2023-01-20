import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment";

@Component({
  selector: 'app-account-details',
  templateUrl: './account-details.component.html',
  styleUrls: ['./account-details.component.css']
})
export class AccountDetailsComponent implements OnInit {
  customerId!: any;
  customer!:any;

  constructor(private route:ActivatedRoute,private http:HttpClient,private router: Router) {
    this.customerId=this.route.snapshot.params['customerId'];
  }

  ngOnInit(): void {
    this.getDetails();
  }
  getDetails(){
    this.http.get(environment.backendHost+"/CUSTOMER-SERVICE/customers/"+this.customerId).subscribe({
      next:(data)=>{this.customer=data},
      error:(err)=>{
        console.log(err);
      }
    });
  }

  previous() {
    this.router.navigateByUrl("/customers")
  }
}
