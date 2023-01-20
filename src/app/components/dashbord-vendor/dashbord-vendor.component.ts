import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashbord-vendor',
  templateUrl: './dashbord-vendor.component.html',
  styleUrls: ['./dashbord-vendor.component.css']
})
export class DashbordVendorComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  gotoAccueil() {
    this.router.navigate(['']);
  }

}
