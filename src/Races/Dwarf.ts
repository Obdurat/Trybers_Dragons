import Race from './Race';

export default class Dwarf extends Race {
  _maxLifePoints: number;

  private static instancesCounter = 0;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    Dwarf.instancesCounter += 1;
    this._maxLifePoints = 80;
  }

  get maxLifePoints(): number { return this._maxLifePoints; }

  static createdRacesInstances(): number {
    return Dwarf.instancesCounter;
  }
}