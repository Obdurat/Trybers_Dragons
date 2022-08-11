import Archetype from './Archetype';
import { EnergyType } from '../Energy';

export default class Necromancer extends Archetype {
  private _energyType: EnergyType;
  protected static instancesCounter = 0;

  constructor(name: string) {
    super(name);
    this._energyType = 'mana';
    Necromancer.instancesCounter += 1;
  }

  get energyType(): EnergyType { return this._energyType; }

  static createdArchetypeInstances() {
    return Necromancer.instancesCounter;
  }
}