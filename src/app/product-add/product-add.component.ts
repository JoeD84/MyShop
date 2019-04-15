import {
  Component,
  OnInit
} from '@angular/core';
import { Product } from '../model/product';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.scss']
})
export class ProductAddComponent implements OnInit {
  form: FormGroup;
  public product: Product;
  constructor() {}

  ngOnInit() {}

  addProduct(productForm) {
    console.log('Product form', productForm.value);
    if (productForm.valid) {
      this.product = productForm.value.product;
      console.log('Creating Product ', this.product);
    } else {
      console.error('Product form is in an invalid state');
    }
  }

}
