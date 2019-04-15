import { 
  Component, 
  OnInit 
} from '@angular/core';
import { Product } from '../model/product';
import { ProductChange } from '../model/product-change';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  public products: Array < Product >

  constructor() { 
    this.products = [
      new Product(1, 'Product 1', 15.99, 'assets/StockSnap_5A5JLDXM4R.jpg', false),
      new Product(2, 'Product 2',  5.99, 'assets/StockSnap_W3LQTILJNT.jpg', true),
      new Product(3, 'Product 3', 25.49, 'assets/StockSnap_YWGBUF1QKI.jpg', false),
      new Product(4, 'Product 4', 11.23, 'assets/StockSnap_SJX0UPY4VO.jpg', true) 
    ]
  }

  ngOnInit() {
  }


  onQuantityChange(change: ProductChange) {
    const product = this.products.find(prod => {
      return change.Product.Id === prod.Id;
    });
    product.InCart += change.Quantity;
  }

}
