import { Component,OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ItemservService } from '../service/itemserv.service';

@Component({
  selector: 'app-item-details',
  templateUrl: './item-details.component.html',
  styleUrl: './item-details.component.css'
})
export class ItemDetailsComponent {
  id:any
  data:any={}
constructor(private route:ActivatedRoute, private service:ItemservService){
  this.id=this.route.snapshot.paramMap.get("id")
  console.log(this.id);
}
ngOnInit():void{
  this.getItem()
}

getItem(){
  this.service.getItemByID(this.id).subscribe(res=>{
  this.data=res;
  })
}
}
