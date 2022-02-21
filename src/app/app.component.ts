import { Component, OnInit } from '@angular/core';
import { Case } from './case';
import { Player } from './player';
import { TicTacToeService } from './tic-tac-toe.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [TicTacToeService]
})
export class AppComponent implements OnInit{
  title = 'ticTacToe-angular';
  cases: Case[] = [];

  playerTurn!: Player;

  constructor(private ticTacToeService: TicTacToeService) {
  }

  ngOnInit() {
    this.ticTacToeService.getActivePlayer().subscribe(value => this.playerTurn = value);
    this.ticTacToeService.getCellGridContent().subscribe(value => this.cases = value);
  }

  setSymbol(active: Case) {
    this.ticTacToeService.setSymbol(active);
  }
  restart() {
    this.ticTacToeService.newGame();
  }
}
