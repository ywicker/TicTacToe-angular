import { Component, Input, OnInit } from '@angular/core';
import { Case } from '../case';

@Component({
  selector: 'app-case',
  templateUrl: './case.component.html',
  styleUrls: ['./case.component.scss']
})
export class CaseComponent implements OnInit {
  @Input()
  case!: Case;

  constructor() { }

  ngOnInit(): void {
  }

  changeContent(): string {
    if(this.case != null){
      if(this.case.symbol == 'O'){
        return "green";
      } else if(this.case.symbol == 'X'){
        return "red";
      }
    }
    return "white";
  }

}
