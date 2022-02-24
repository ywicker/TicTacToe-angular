import { Injectable } from '@angular/core';
import { catchError, Observable, of } from 'rxjs';
import { Case } from './case';
import { Player } from './player';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TicTacToeService {

  constructor(private http: HttpClient) {
  }
  getState() {
    return this.http.get<string>('http://localhost:8080/TicTacToe/state').toPromise();
  }
  getGrid() {
    return this.http.get<any>('http://localhost:8080/TicTacToe/grid').toPromise();
  }
  play(player: string ,c: Case){
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })
    };
    return this.http.post<any>('http://localhost:8080/TicTacToe/play', { playerValue: player, coordinateDTO: {x:c.x, y:c.y} }, httpOptions).toPromise();
  }
  restart() {
    return this.http.post<any>('http://localhost:8080/TicTacToe/reset', {}).toPromise();
  }
}
