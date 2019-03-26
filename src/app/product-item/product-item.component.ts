import { Component, OnInit } from '@angular/core';

import { Product } from "../model/product"; 

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.scss']
})
export class ProductItemComponent implements OnInit {

  product: Product

  constructor() { }

  ngOnInit() {
    this.product = {
      Name : 'Product',
      Price : 15.99,
      ImageURL : 'assets/img_avatar.png',
      OnSale : false,
      InCart : 0
    }
  }

  increase(){
    this.product.InCart++;
  }

  decrease(){
    this.product.InCart--;
  }

}
