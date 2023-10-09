import Nest from "./nest";
import FoodSource from "./foodSource";

class Environment {
    private nests: Nest[];
    private foodSources: FoodSource[];

    constructor() {
        this.nests = [];
        this.foodSources = [];
    }

    addNest(nest: Nest): void {
        this.nests.push(nest);
    }

    addFoodSource(foodSource: FoodSource): void {
        this.foodSources.push(foodSource);
    }

    getNests(): Nest[] {
        return this.nests;
    }

    getFoodSources(): FoodSource[] {
        return this.foodSources;
    }
}

export default Environment;