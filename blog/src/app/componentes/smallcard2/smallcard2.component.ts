import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-smallcard2',
  templateUrl: './smallcard2.component.html',
  styleUrls: ['./smallcard2.component.css']
})
export class Smallcard2Component{
  @Input()
  Fotocapa:string=""
  @Input()
  titulopag:string=""
  @Input()
  ID:string="0"

  


  constructor(){}

  ngOnInit(): void {}
    
}
