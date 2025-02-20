
// Soldier

class Soldier {
    constructor(health, strength) {
        this.health = health;
        this.strength = strength;
    }
    attack() {
        return this.strength;
    }
    receiveDamage(damage) {
        this.health -= damage;
    }
}


// Viking

class Viking extends Soldier {
    constructor(name, health, strength) {
      super(health, strength);
      this.name = name;
    }
    receiveDamage(damage) {
      this.health -= damage;
      return this.health > 0 ? `${this.name} has received ${damage} points of damage` : `${this.name} has died in act of combat`; // ternary Operator
    }
    battleCry() {
      return `Odin Owns You All!`;
    }
}
 

// Saxon

class Saxon extends Soldier { 
    receiveDamage(damage) {
      this.health -= damage;
      return this.health > 0 ? `A Saxon has received ${damage} points of damage` : `A Saxon has died in combat`; // ternary Operator
    }
}


// War

class War {
    constructor() {
        this.vikingArmy = []; //create new Array
        this.saxonArmy = []; //create new Array
    }
    addViking(viking) {
        this.vikingArmy.push(viking); //filling the new Array
    }
    addSaxon(saxon) {
        this.saxonArmy.push(saxon); //filling the new Array
    }
    randomSoldier(army) {
        return army[Math.floor(Math.random() * army.length)]; //random amount of soldiers
    }
    removeDead() {
        this.vikingArmy = this.vikingArmy.filter((s) => s.health > 0); //create new Array with viking soldiers alive
        this.saxonArmy = this.saxonArmy.filter((s) => s.health > 0); //create new Array with saxon soldiers alive
    }
    attack(attackers, losers) {
        const result = this.randomSoldier(losers).receiveDamage(
          this.randomSoldier(attackers).strength
        );
        this.removeDead(); 
    
        return result;
    }
    vikingAttack() {
        return this.attack(this.vikingArmy, this.saxonArmy); //compare the amount of soldiers
    } 
    saxonAttack() {
        return this.attack(this.saxonArmy, this.vikingArmy); //compare the amount of soldiers
    }
    showStatus() {
        return this.saxonArmy.length === 0 ? 'Vikings have won the war of the century!' : this.vikingArmy.length === 0 ? 'Saxons have fought for their lives and survived another day...' : 'Vikings and Saxons are still in the thick of battle.'; // ternary Operator
    }
}