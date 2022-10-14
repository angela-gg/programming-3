class GrassEater extends LivingCreature {
    constructor(x, y, index) {
        super(x, y);
        this.index = index;
        this.energy = Math.round(random(1,5));
        this.directions = [];
    }

    move() {
        this.energy--;
        var newCell = random(this.chooseCell(0));

        if (newCell) {
            var newX = newCell[0];
            var newY = newCell[1];

            matrix[this.y][this.x] = 0;
            matrix[newY][newX] = 2;
            this.y = newY;
            this.x = newX;
        }
    }

    mul() {
        if(this.energy >= 2){
            this.energy--;
            var emptyCells = this.chooseCell(0);
            var newCell = random(emptyCells);

            if(newCell){
                var newX = newCell[0];
                var newY = newCell[1];
                matrix[newY][newX] = 2;

                var newGrassEater = new GrassEater(newX, newY, 1);
                grassEaterArr.push(newGrassEater);
            }
        }
    }

    eat() {
        var newCell = random(this.chooseCell(1));
        if (newCell) {
            var newX = newCell[0];
            var newY = newCell[1];

            matrix[this.y][this.x] = 0;
            matrix[newY][newX] = 2;
            for (var i in grassArr) {
                if (newX == grassArr[i].x && newY == grassArr[i].y) {
                    grassArr.splice(i, 1);
                    break;

                }
            }
            this.y = newY;
            this.x = newX;
            this.energy+=3;
        }
    }
    die() {
        if (this.energy <= 0) {
            matrix[this.y][this.x] = 0;

            for (var i in grassEaterArr) {
                if (this.x == grassEaterArr[i].x && this.y == grassEaterArr[i].y) {
                    grassEaterArr.splice(i, 1);
                    break;
                }
            }
        }
    }
}
