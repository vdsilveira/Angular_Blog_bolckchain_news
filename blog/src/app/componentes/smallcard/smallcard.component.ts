import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-smallcard',
  templateUrl: './smallcard.component.html',
  styleUrls: ['./smallcard.component.css']
})
export class SmallcardComponent  implements OnInit{


  @Input()
  Fotocapa:string=""
  @Input()
  titulopag:string=""

  


  constructor(){}

  ngOnInit(): void {}
    
  

}
