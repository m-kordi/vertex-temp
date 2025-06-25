/* import { Component,OnInit } from '@angular/core';
import { ItemservService } from './service/itemserv.service';


@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrl: './items.component.css'
})
export class ItemsComponent implements OnInit {
  items:any[]=[]
constructor(private service:ItemservService){}
ngOnInit():void{
  this.getitems();
}
getitems(){
  this.service.getAllItems().subscribe((res:any)=>{
    this.items=res;
  })
}

} */

import { Component, OnInit } from '@angular/core';
import { ItemservService } from './service/itemserv.service';
import { CartService, CartItem } from '../cart/service/carts.service';

import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {
  items: any[] = [];
showToast: boolean = false;
  constructor(private service: ItemservService, private cartService: CartService,private toastr: ToastrService) {}

  ngOnInit(): void {
    this.getitems();
    this.cartService.loadCart();
  }

  getitems() {
    this.service.getAllItems().subscribe((res:any) => {
      this.items = res;
    });
  }

  addToCart(item: any) {
    const cartItem: CartItem = {
      id: item.id,
      title: item.title,
      price: item.price,
      quantity: 1,
      image: item.image
    };
    this.cartService.addToCart(cartItem);
    this.showToast = true;
    setTimeout(() => this.showToast = false, 3000);
  }
}



