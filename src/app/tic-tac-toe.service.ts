import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { Case } from './case';
import { Player } from './player';

@Injectable({
  providedIn: 'root'
})
export class TicTacToeService {
  players: Player[] = [];
  xPlayerSymbol: string = 'X';
  oPlayerSymbol: string = 'O';

  title = 'ticTacToe-angular';
  cases: Case[] = [];
  activePlayer!: Player;

  constructor() {
    const playerX = new Player(Player.xPlayerSymbol);
    this.players.push(new Player(Player.oPlayerSymbol));
    this.players.push(playerX);
    this.activePlayer = playerX;

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

  getCellGridContent() {
    return of(this.cases);
  }

  getActivePlayer() {
    return of(this.activePlayer);
  }

  newGame(){
    this.cases.forEach(value => value.symbol='');
  }

  setSymbol(active: Case): void {
    const activeCase = this.cases.find(c => c == active);
    if(activeCase != undefined && activeCase.symbol == '') {
      activeCase.symbol = this.activePlayer.symbol;
      this.activePlayer = this.activePlayer.changePlayer(this.players);
    }
  }
}
