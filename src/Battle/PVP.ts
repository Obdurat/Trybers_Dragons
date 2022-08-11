import Battle from './Battle';
import Fighter from '../Fighter';

export default class PVP extends Battle {
  constructor(player1: Fighter, protected player2: Fighter) {
    super(player1);
    this.player2 = player2;
  }

  fight(): number {
    while (this.player.lifePoints > -1 && this.player2.lifePoints > -1) {
      this.player.attack(this.player2);
      this.player2.attack(this.player);
    }
    return this.player.lifePoints === -1 ? -1 : 1;
  }
}