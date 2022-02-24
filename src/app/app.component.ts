import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Case } from './case';
import { DialogsConfirmComponent } from './dialogs-confirm/dialogs-confirm.component';
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
  activePlayer: string = '';
  gameResult: string = '';

  constructor(private ticTacToeService: TicTacToeService, private dialog: MatDialog) {
  }
  openDialog(message: string) {
    const data = {
      title: message,
      confirmText: 'Restart'
    }
    this.dialog.open(DialogsConfirmComponent, {
      data,
      width: '400px',
      disableClose: true,
    })
    .afterClosed().subscribe(() => this.restart())
  }
  
  ngOnInit() {
    this.refreshGrid();
  }

  refreshState() {
    this.ticTacToeService.getState().then((data) => {
      console.log(data);
      if(data != undefined){
        switch(data) {
          case "PLAYER_X_TURN": 
            this.activePlayer = "PLAYER_X";
            break;
          case "PLAYER_O_TURN":
            this.activePlayer = "PLAYER_O";
            break;
          case "IS_OVER":
            this.gameResult = data;
            this.openDialog('The game ends in a tie');
            break;
          case "PLAYER_X_WINS":
            this.gameResult = data;
            this.openDialog('Player X wins the game');
            break;
          case "PLAYER_O_WINS":
            this.gameResult = data;
            this.openDialog('Player O wins the game');
            break;
        }
      }
    })
    .catch((error) => {
      console.log("Promise rejected with " + error);
    });
  }
  refreshGrid(){
    return this.ticTacToeService.getGrid().then((data) => {
      let gridDatas = data.cells;
      console.log(gridDatas);
      if(gridDatas != undefined) {
        const grid: Case[] = [];
        for (let x = 0; x < gridDatas.length; x++ ) {
          for (let y = 0; y < gridDatas[x].length; y++ ) {
            let c = new Case;
            c.symbol=gridDatas[y][x];
            c.x = x+1;
            c.y = y+1;
            grid.push(c)
          }
        }
        this.cases = grid
      }
    }).then(() => {
      this.refreshState();
    });
  }

  setSymbol(activeCase: Case): void {
    if(activeCase != undefined && activeCase.symbol == '') {
      this.ticTacToeService.play(this.activePlayer, activeCase)
        .then(() => this.refreshGrid());
    }
  }


  restart() {
    this.ticTacToeService.restart()
      .then(() => this.refreshGrid());
  }
}
