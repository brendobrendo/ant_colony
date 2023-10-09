import Ant from './ant';

class WorkerAnt extends Ant {
    private pheromoneLevel: number;
    private foundFood: boolean;
    private foodWeight: number;

    constructor(energy: number, age: number) {
        super(energy, age, 'worker', 'foraging');
        this.pheromoneLevel = 0;
        this.foundFood = false;
    }

    performTask(): void {
        if (this.sensePheromones()) {
            // The ant senses pheromones and might follow them towards food.
            this.followPheromones();
        } else {
            this.energy -= 2;

            if (this.foundFood) {
                this.releasePheromones();
            }
        }
    }

    followPheromones(): void {
        console.log('Following pheromones towards food!');
    }

    releasePheromones(): void {
        console.log('Releasing pheromones');
    }

    sensePheromones(): boolean {
        return this.pheromoneLevel > 0;
    }
}

export default WorkerAnt;