import Fighter, { SimpleFighter } from '../Fighter';
import Battle from './Battle';

export default class PVE extends Battle {
  private environment: (SimpleFighter | Fighter)[];

  constructor(fighter: Fighter, environment: (SimpleFighter | Fighter)[]) {
    super(fighter);
    this.environment = environment;
  }

  fight(): number {
    this.environment.forEach((enemy) => {
      enemy.attack(this.player);
      this.player.attack(enemy);
      enemy.attack(this.player);
      enemy.attack(this.player);
      enemy.attack(this.player);
      this.player.special(enemy);
    });

    return this.player.lifePoints === -1 ? -1 : 1;
  }
}