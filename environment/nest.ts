import Ant from "../agents/ant";

class Nest {
    private ants: Ant[];

    constructor() {
        this.ants = [];
    }

    addAnt(ant: Ant): void {
        this.ants.push(ant);
    }

    getAnts(): Ant[] {
        return this.ants;
    }
}

export default Nest;