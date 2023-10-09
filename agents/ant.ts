import { AntType, TaskType } from "../interfaces/interfaces";

abstract class Ant {
    protected energy: number;
    protected age: number;
    protected type: AntType;
    protected task: TaskType;

    constructor(energy: number, age: number, type: AntType, task: TaskType) {
        this.energy = energy;
        this.age = age;
        this.type = type;
        this.task = task;
    }

    abstract performTask(): void;

    getEnergy(): number {
        return this.energy;
    }

    getAge(): number {
        return this.age;
    }

    getType(): AntType {
        return this.type;
    }

    getTask(): TaskType {
        return this.task;
    }

    setEnergy(energy: number): void {
        this.energy = energy;
    }

    setTask(task: TaskType): void {
        this.task = task;
    }
}

export default Ant;