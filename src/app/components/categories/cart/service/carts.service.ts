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

/* getTotal(): number {
  return this.items.reduce((sum, item) => sum + (item.price * item.quantity), 0);
} */
getTotal(): number {
  const total = this.items.reduce(
    (sum, item) => sum + (item.price * item.quantity),
    0
  );
  return Math.round(total * 100) / 100; // مشكلة الفواصل العشرية
}


checkoutCart() {
  const payload = {
    id: 0,
    userId: 1,
    products: this.items.map(item => ({
      id: item.id,
      title: item.title,
      price: item.price,
      description: 'No description',  //غير موجود
      category: 'General',           // غير موجود
      image: item.image
    }))
  };

  return this.http.post('https://fakestoreapi.com/carts', payload);
}

}

