/* import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartsService {

  constructor() { }
}
 */
// src/app/services/cart.service.ts
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';

export interface CartItem {
  id: number;
  title: string;
  price: number;
  quantity: number;
  image?: string;
}

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private items: CartItem[] = [];
  private cart$ = new BehaviorSubject<CartItem[]>([]);
  constructor(private http: HttpClient) {}

  getCart() {
    return this.cart$.asObservable();
  }

  addToCart(item: CartItem) {
    const found = this.items.find(i => i.id === item.id);
    if (found) {
      found.quantity += item.quantity;
    } else {
      this.items.push({ ...item });
    }
    this.saveCart();
  }

  removeFromCart(id: number) {
    this.items = this.items.filter(i => i.id !== id);
    this.saveCart();
  }

  clearCart() {
    this.items = [];
    this.saveCart();
  }

  private saveCart() {
    this.cart$.next(this.items);
    localStorage.setItem('cart', JSON.stringify(this.items));
  }

  loadCart() {
    const data = localStorage.getItem('cart');
    if (data) {
      this.items = JSON.parse(data);
      this.cart$.next(this.items);
    }
  }


  increaseQuantity(id: number) {
  const item = this.items.find(i => i.id === id);
  if (item) {
    item.quantity += 1;
    this.saveCart();
  }
}

decreaseQuantity(id: number) {
  const item = this.items.find(i => i.id === id);
  if (item) {
    item.quantity -= 1;
    if (item.quantity <= 0) {
      this.removeFromCart(id);
    } else {
      this.saveCart();
    }
  }
}

getTotal(): number {
  return this.items.reduce((sum, item) => sum + (item.price * item.quantity), 0);
}


checkoutCart() {
  const payload = {
    id: 0, // أي رقم
    userId: 123, // أي رقم ثابت كما طلبت
    products: this.items.map(item => ({
      id: item.id,
      title: item.title,
      price: item.price,
      description: 'No description',  // يمكنك تخصيصه
      category: 'General',           // يمكنك تخصيصه
      image: item.image
    }))
  };

  return this.http.post('https://fakestoreapi.com/carts', payload);
}

}

