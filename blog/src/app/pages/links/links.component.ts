import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-links',
  templateUrl: './links.component.html',
  styleUrls: ['./links.component.css']
})
export class LinksComponent {
  private ID:string | null ="0"




  constructor(  
    private route:ActivatedRoute
  ){}

 ngOnInit():void{
  this.route.paramMap.subscribe(value =>this.ID = value.get("ID"))

 }
  //SetVeluesToComponents(ID:string){
   // const result= ID
  //}



}

