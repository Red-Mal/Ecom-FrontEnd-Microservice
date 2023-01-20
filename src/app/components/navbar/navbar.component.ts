import { Component, OnInit } from '@angular/core';
import {SecurityService} from "../../services/security.service";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(public securityService:SecurityService) { }

  ngOnInit(): void {
  }

  async login() {
    await this.securityService.kcService.login({
      redirectUri:window.location.origin
    })
  }

  onLogout() {
    this.securityService.kcService.logout(window.location.origin);

  }
}
