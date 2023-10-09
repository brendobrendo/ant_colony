import Ant from './ant';

class SoldierAnt extends Ant {
    constructor(energy: number, age: number) {
        super(energy, age, 'soldier', 'defending');
    }

    performTask(): void {
        this.energy -= 3
    }
}

export default SoldierAnt;