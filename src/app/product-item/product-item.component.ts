import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  ChangeDetectionStrategy
} from '@angular/core';

import { Product } from "../model/product";
import { ProductChange } from '../model/product-change';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductItemComponent implements OnInit {

  @Input() public product: Product
  @Output() public productChange: EventEmitter<ProductChange> = new EventEmitter<ProductChange>();
  private quantities: Array < number >

  constructor() {}

  ngOnInit() {
    this.quantities = [];
    for (let i = 0; i < 20; i++) {
      this.quantities.push(i);
    }
  }  

  increase(i) {
    this.productChange.emit({Product: this.product, Quantity: 1}); 
  }

  decrease(i) {
    this.productChange.emit({Product: this.product, Quantity: -1}); 
  }

}
