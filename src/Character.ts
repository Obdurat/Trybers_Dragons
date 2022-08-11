import Fighter, { SimpleFighter } from './Fighter';
import Race, { Elf } from './Races';
import Archetype, { Mage } from './Archetypes';
import Energy from './Energy';
import getRandomInt from './utils';

export default class Character implements Fighter {
  private _race: Race;
  private _archetype: Archetype;
  private _maxLifePoints: number;
  private _lifePoints: number;
  private _strength: number;
  private _defense: number;
  private _dexterity: number;
  private _energy: Energy;

  constructor(name: string) {
    this._dexterity = getRandomInt(1, 10);
    this._race = new Elf(name, this._dexterity);
    this._archetype = new Mage(this._race.name);
    this._maxLifePoints = this._race.maxLifePoints / 2;
    this._lifePoints = this._maxLifePoints;
    this._strength = getRandomInt(1, 10);
    this._defense = getRandomInt(1, 10);
    this._energy = { 
      type_: this._archetype.energyType,
      amount: getRandomInt(1, 10), 
    };
  }

  get race(): Race { return this._race; }
  get archetype(): Archetype { return this._archetype; }
  get lifePoints(): number { return this._lifePoints; }
  get strength(): number { return this._strength; }
  get defense(): number { return this._defense; }
  get dexterity(): number { return this._dexterity; }
  get energy(): Energy { return ({ ...this._energy }); }

  receiveDamage(attackPoints: number): number {
    const damage = attackPoints - this.defense;
    if (damage <= 0) { return this.lifePoints; }
    this._lifePoints -= damage;
    if (this.lifePoints <= 0) this._lifePoints = -1;
    return this.lifePoints;
  }

  attack(enemy: Fighter | SimpleFighter): void {
    enemy.receiveDamage(this._strength);      
  }

  private LifeCheck() {
    const increase = getRandomInt(1, 10);

    const levelUpIncrease = this
      ._maxLifePoints + increase > this._race.maxLifePoints;

    if (levelUpIncrease) this._maxLifePoints = this._race.maxLifePoints;
    else this._maxLifePoints += increase;
  }

  levelUp(): void {
    this.LifeCheck();
    this._strength += getRandomInt(1, 10);
    this._dexterity += getRandomInt(1, 10);
    this._defense += getRandomInt(1, 10);
    this._energy.amount = 10;
    this._lifePoints = this._maxLifePoints;
  }

  special(enemy: Fighter | SimpleFighter): void {
    const specialStr = this._strength + this._energy.amount;
    enemy.receiveDamage(specialStr);
    this._energy.amount = 0;
  }
}