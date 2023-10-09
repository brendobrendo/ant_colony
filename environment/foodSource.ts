class FoodSource {
    private amount: number;

    constructor(amount: number) {
        this.amount = amount;
    }

    getAmount(): number {
        return this.amount;
    }

    decrementAmount(value: number): void {
        this.amount -= value;
        if (this.amount < 0) this.amount = 0;
    }
}

export default FoodSource;