class Grass extends LivingCreature {
    constructor(x, y, index) {
        super(x, y);
        this.index = index;
        this.multiply = 0;
    }

    mul () {
        this.multiply+=5;
        var emptyCells = this.chooseCell(0);
        var newCell = random(emptyCells);

        if(newCell && this.multiply >= 5){
            var newX = newCell[0];
            var newY = newCell[1];
            matrix[newY][newX] = 1;

            var newGrass = new Grass(newX, newY, 1);
            grassArr.push(newGrass);
            this.multiply = 0;
        }
    }


}

