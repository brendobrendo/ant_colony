import Ant from './ant';

class QueenAnt extends Ant {
    private eggsLaid: number;

    constructor(energy: number, age: number, eggsLaid: number) {
        super(energy, age, 'queen', 'laying eggs');
        this.eggsLaid = eggsLaid;
    }

    performTask(): void {
        this.layEggs();
    }

    layEggs(): void {
        this.eggsLaid += 10;
        this.energy -= 5;
    }

    getEggsLaid(): number {
        return this.eggsLaid;
    }
}

export default QueenAnt;