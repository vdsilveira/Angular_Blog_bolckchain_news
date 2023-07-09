import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-bigcard',
  templateUrl: './bigcard.component.html',
  styleUrls: ['./bigcard.component.css']

  
})
export class BigcardComponent implements OnInit {

  @Input()
  Fotocapa:string=""
  @Input()
  titulopag:string=""
  @Input()
  cardDescricao:string=""


  constructor(){}

  ngOnInit(): void {
    
  }




}
