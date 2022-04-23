import Battle from './Battle';
import Fighter from '../Fighter';

export default class PVP extends Battle {
  private player1: Fighter;
  private player2: Fighter;

  constructor(firstFighter: Fighter, secondFighter: Fighter) {
    super(firstFighter);
    this.player1 = firstFighter;
    this.player2 = secondFighter;  
  }

  fight(): number {
    this.player1.attack(this.player2);
    this.player2.attack(this.player1);
    this.player2.attack(this.player1);
    this.player1.special(this.player2);

    const player1Wins = this.player1.lifePoints > this.player2.lifePoints;

    return player1Wins ? 1 : -1;
  }
}