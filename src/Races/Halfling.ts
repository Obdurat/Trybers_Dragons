import Race from './Race';

export default class Halfling extends Race {
  _maxLifePoints: number;

  private static instancesCounter = 0;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    Halfling.instancesCounter += 1;
    this._maxLifePoints = 60;
  }

  get maxLifePoints(): number { return this._maxLifePoints; }

  static createdRacesInstances(): number {
    return Halfling.instancesCounter;
  }
}