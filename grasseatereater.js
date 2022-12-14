class GrassEaterEater extends LivingCreature {
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
                matrix[newY][newX] = 3;
                this.y = newY;
                this.x = newX;
            }
    }


    mul() {
        if(this.energy >= 10){
            this.energy-=3;
            var emptyCells = this.chooseCell(0);
            var newCell = random(emptyCells);

            if(newCell){
                var newX = newCell[0];
                var newY = newCell[1];
                matrix[newY][newX] = 3;

                var newGrassEaterEater = new GrassEaterEater(newX, newY, 1);
                grassEaterEaterArr.push(newGrassEaterEater);
            }
        }
    }

    eat() {
        var newCell = random(this.chooseCell(2));
        if (newCell) {
            var newX = newCell[0];
            var newY = newCell[1];

            matrix[this.y][this.x] = 0;
            matrix[newY][newX] = 3;
            for (var i in grassEaterArr) {
                if (newX == grassEaterArr[i].x && newY == grassEaterArr[i].y) {
                    grassEaterArr.splice(i, 1);
                    break;
                }
            }
            this.y = newY;
            this.x = newX;
            this.energy++;
        }else{
            this.move();
        }
    }
    die() {
        if (this.energy <= 0) {
            matrix[this.y][this.x] = 0;

            for (var i in grassEaterEaterArr) {
                if (this.x == grassEaterEaterArr[i].x && this.y == grassEaterEaterArr[i].y) {
                    grassEaterEaterArr.splice(i, 1);
                    break;
                }
            }
        }
    }
}

