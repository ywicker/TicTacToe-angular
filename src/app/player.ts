export class Player {
    static xPlayerSymbol: string = 'PLAYER_X';
    static oPlayerSymbol: string = 'PLAYER_O';

    symbol!: string;

    constructor(symbol: string){
        this.symbol = symbol;
    }

    changePlayer(players: Player[]) : Player {
        const nextPlayer = players.find(player => player.symbol != this.symbol);
        if(nextPlayer != undefined)
            return nextPlayer;
        return this;
    }
}
