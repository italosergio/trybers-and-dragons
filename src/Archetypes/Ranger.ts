import Archetype from './Archetype';
import { EnergyType } from '../Energy';

export default class Ranger extends Archetype {
  private _eType: EnergyType;
  private static _instances = 0;

  constructor(name: string) {
    super(name);
    this._eType = 'stamina';
  }

  get energyType() {
    return this._eType;
  }

  static createdArchetypeInstances() {
    this._instances += 1;
   
    return this._instances;
  }
}