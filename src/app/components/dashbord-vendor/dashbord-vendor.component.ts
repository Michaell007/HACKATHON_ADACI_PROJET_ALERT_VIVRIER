import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/app/models/product';
import { Stock } from 'src/app/models/stock';
import { LocalStorageService } from 'src/app/services/local-storage.service';

@Component({
  selector: 'app-dashbord-vendor',
  templateUrl: './dashbord-vendor.component.html',
  styleUrls: ['./dashbord-vendor.component.css']
})
export class DashbordVendorComponent implements OnInit {

  index = 320;
  allProducts!: Product[];
  stocks!: Stock[];

  myProduct!: Product;
  myQuantite!: number;
  myPrix!: number;
  myStock!: Stock;

  constructor(private router: Router, private storageService: LocalStorageService) { }

  ngOnInit(): void {
    this.allProducts = this.storageService.getLocalStorage("products");
    this.stocks = this.storageService.getLocalStorage("stocks");
    // this.myStock.id = 67
  }

  gotoAccueil() {
    this.router.navigate(['']);
  }

  onClickPrix(e: any) {
    this.myPrix = e.target.value;
  }

  onClickQuantite(e: any) {
    this.myQuantite = e.target.value;
  }

  onClickArticle(e: any) {
    this.myProduct = e.target.value;
  }

  onPublierStock() {
    // this.myStock.id = 128;
    // this.myStock.product = this.myProduct;
    // this.myStock.quantite = this.myQuantite;
    // this.myStock.prix = this.myPrix;

    // console.log( this.myStock )
  }

}
