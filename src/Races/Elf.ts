import Race from './Race';

export default class Elf extends Race {
  _maxLifePoints: number;

  private static instancesCounter = 0;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    Elf.instancesCounter += 1;
    this._maxLifePoints = 99;
  }

  get maxLifePoints(): number { return this._maxLifePoints; }

  static createdRacesInstances(): number {
    return Elf.instancesCounter;
  }
}