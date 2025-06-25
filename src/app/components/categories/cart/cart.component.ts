/* import { Component } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent {

}
 */
import { Component, OnInit } from '@angular/core';
import { CartService, CartItem } from './service/carts.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cartItems: CartItem[] = [];

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.cartService.getCart().subscribe(items => {
      this.cartItems = items;
    });
  }

  remove(id: number) {
    this.cartService.removeFromCart(id);
  }

  clear() {
    this.cartService.clearCart();
  }
  increase(id: number) {
    this.cartService.increaseQuantity(id);
  }

  decrease(id: number) {
    this.cartService.decreaseQuantity(id);
  }

  get totalPrice(): number {
    return this.cartService.getTotal();
  }


  checkout() {
  this.cartService.checkoutCart().subscribe({
    next: res => {
      console.log('✅ البيانات أُرسلت بنجاح', res);
    },
    error: err => {
      console.error('❌ فشل في الإرسال', err);
    }
  });
}

}

