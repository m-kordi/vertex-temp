import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ItemservService {

  constructor(private http:HttpClient) {}
  getAllItems(){
    return this.http.get('https://fakestoreapi.com/products?limit=12')
  }
  getItemByID(id:any){// تابعة لل itmedetails
    return this.http.get('https://fakestoreapi.com/products/'+id)
  }
}
