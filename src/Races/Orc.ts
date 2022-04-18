import Race from './Race';

class Orc extends Race {
  private _maxLifePoints = 0;
  private static _instances = 0;
  
  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    this.maxLifePoints = 74;
  }

  set maxLifePoints(number) {
    this._maxLifePoints = number;
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }

  static createdRacesInstances(): number {
    this._instances += 1;
   
    return this._instances;
  }
}

export default Orc;