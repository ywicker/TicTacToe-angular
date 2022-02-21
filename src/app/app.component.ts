import { Component } from '@angular/core';
import { Case } from './case';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  xPlayerSymbol: string = 'X';
  oPlayerSymbol: string = 'O';

  title = 'ticTacToe-angular';
  cases: Case[] = [];
  activePlayer: string = this.xPlayerSymbol;

  constructor() {
    this.cases.push(new Case);
    this.cases.push(new Case);
    this.cases.push(new Case);
    this.cases.push(new Case);
    this.cases.push(new Case);
    this.cases.push(new Case);
    this.cases.push(new Case);
    this.cases.push(new Case);
    this.cases.push(new Case);
  }

  setSymbol(active: Case): void {
    const activeCase = this.cases.find(c => c == active);
    if(activeCase != undefined && activeCase.symbol == '') {
      activeCase.symbol = this.activePlayer;
      if(this.activePlayer == this.xPlayerSymbol){
        this.activePlayer = this.oPlayerSymbol;
      } else {
        this.activePlayer = this.xPlayerSymbol;
      }
    }
  }
}
