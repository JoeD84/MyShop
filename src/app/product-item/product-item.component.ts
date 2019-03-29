import {
  Component,
  OnInit
} from '@angular/core';

import {
  Product
} from "../model/product";



@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.scss']
})
export class ProductItemComponent implements OnInit {

  public products: Array < Product >
    private quantities: Array < number >

    constructor() {}

  ngOnInit() {
    this.products = [
      new Product('Product 1', 15.99, 'assets/img_avatar.png', false),
      new Product('Product 2',  5.99, 'assets/img_avatar2.png', true),
      new Product('Product 3', 25.49, 'assets/Product.jpg', false),
      new Product('Product 4', 11.23, 'assets/img_avatar.png', true)
    ]

    this.quantities = [];
    for (let i = 0; i < 20; i++) {
      this.quantities.push(i);
    }

  }

  increase(i) {
    this.products[i].InCart++;
  }

  decrease(i) {
    this.products[i].InCart--;
  }

}
