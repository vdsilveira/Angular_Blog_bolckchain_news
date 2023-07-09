import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-smallcard4',
  templateUrl: './smallcard4.component.html',
  styleUrls: ['./smallcard4.component.css']
})
export class Smallcard4Component {

  @Input()
  Fotocapa:string=""
  @Input()
  titulopag:string=""
  @Input()
  ID:string="0"
  
  constructor(){}

  ngOnInit(): void {}
}
