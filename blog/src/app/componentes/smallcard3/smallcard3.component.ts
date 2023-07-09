import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-smallcard3',
  templateUrl: './smallcard3.component.html',
  styleUrls: ['./smallcard3.component.css']
})
export class Smallcard3Component {

  @Input()
  Fotocapa:string=""
  @Input()
  titulopag:string=""
  @Input()
  ID:string="0"
 
  constructor(){}

  ngOnInit(): void {}
    

}
