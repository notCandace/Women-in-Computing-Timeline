class Player {

    constructor(position) {
        this.row = position.x;
        this.col = position.y;
        //console.log("Player start position: [" + this.row + ", " + this.col + "]");
        this.size = TILE_SIZE;
        this.images = [loadImage("assets/sprites/character/player/lyuba-right-1.png"),
                       loadImage("assets/sprites/character/player/lyuba-left-1.png")];
        this.currImage = this.images[0]; //left-facing
        this.count = 0;
  }

    draw() {
        image(this.currImage, this.row * this.size, this.col * this.size);
    }


    move(levelNumber) {
        if (this.canMoveUp(layouts[levelNumber])) {
        this.col --;
        // track when obstacles will fall
        this.count++;
        // throwObstacles(this.count);

    } else if (this.canMoveDown(layouts[levelNumber])) {
        this.col ++;
        // track when obstacles will fall
        this.count++;
        // throwObstacles(this.count);

    } else if (this.canMoveRight(layouts[levelNumber])) {
        this.row ++;
        this.currImage = this.images[0];
        // track when obstacles will fall
        this.count++;
        // throwObstacles(this.count);

    } else if (this.canMoveLeft(layouts[levelNumber])) {
        this.row --;
        this.currImage = this.images[1];
        // track will obstacles will fall
        this.count++;
        // throwObstacles(this.count);
    }

}

    canMoveUp(currLevel) {
        // iff platform above is ladder
        return (
            keyIsDown(UP_ARROW)
            && this.isValidMove(this.row, this.col - 1)

        );
    }

    canMoveDown(currLevel) {
        return (
            keyIsDown(DOWN_ARROW)
            && this.isValidMove(this.row, this.col + 1)

        );
    }

    canMoveRight(currLevel) {
        return (
            keyIsDown(RIGHT_ARROW)
            && this.isValidMove(this.row + 1, this.col)

        );
    }

    canMoveLeft(currLevel) {
        return (
            keyIsDown(LEFT_ARROW)
            && this.isValidMove(this.row - 1, this.col)

        );
    }



/*

    move(levelNumber) {
        if (this.canMoveUp(layouts[levelNumber])) {
            this.col --;
            // track when obstacles will fall
            this.count++;
            //throwObstacles(this.count);

        } else if (this.canMoveDown(layouts[levelNumber])) {
            this.col ++;
            // track when obstacles will fall
            this.count++;
            //throwObstacles(this.count);

        } else if (this.canMoveRight(layouts[levelNumber])) {
            this.row ++;
            this.currImage = this.images[0];
            // track when obstacles will fall
            this.count++;
            //throwObstacles(this.count);

        } else if (this.canMoveLeft(layouts[levelNumber])) {
            this.row --;
            this.currImage = this.images[1];
          // track will obstacles will fall
          this.count++;
          //throwObstacles(this.count);
        }

    //console.log("[" + this.row + "] [" + this.col + "]");

    }

    canMoveUp(currLevel) {
        let moveUp = (keyIsDown(UP_ARROW)
                && this.isValidMove(this.row, this.col - 1)
                && (currLevel[this.row][this.col - 1] == LADDER
                || currLevel[this.row][this.col] == LADDER));
        //debugging
        //console.log("MOVE UP:");
        //console.log("is valid move? " + (this.isValidMove(this.row, this.col - 1)));
        //console.log("is there a ladder above me? " + (currLevel[this.col - 1][this.row] == LADDER));
        //console.log("am I currently standing in front of a ladder? " + (currLevel[this.col][this.row] == LADDER));
        //console.log("overall, can I move up? " + moveUp);
        //console.log("---------------------------------");
        return moveUp;
    }

    canMoveDown(currLevel) {
        return (keyIsDown(DOWN_ARROW)
                && this.isValidMove(this.row, this.col + 1)
                && currLevel[this.row][this.col + 1] != PLATFORM);
    }

    canMoveRight(currLevel) {
        let moveRight = (keyIsDown(RIGHT_ARROW)
                && this.isValidMove(this.row + 1, this.col)
                && currLevel[this.row + 1][this.col] != PLATFORM //next block directly to right
                && currLevel[this.row + 1][this.col + 1] != EMPTY); //next block underneath is a platform or ladder (PS: no idea why the row/col flipped here!)
        //debugging
        //console.log("MOVE RIGHT:");
        //console.log("is valid move? " + this.isValidMove(this.row + 1, this.col));
        //console.log("if I step to the right, I won't crash into a platform? " + (currLevel[this.row + 1][this.col] != PLATFORM));
        //console.log("there will be either a ladder or platform underneath me if I step to the right? " + (currLevel[this.col + 1][this.row + 1] != EMPTY));
        //console.log("overall, can I move to the right? " + moveRight);
        //console.log("the square to the right of me is: " + currLevel[this.row + 1][this.col]);
        return moveRight;
    }

    canMoveLeft(currLevel) {
        let moveLeft = (keyIsDown(LEFT_ARROW)
                && this.isValidMove(this.row - 1, this.col)
                && currLevel[this.row - 1][this.col] != PLATFORM //next block directly to left
                && currLevel[this.row - 1][this.col + 1] != EMPTY); //next block underneath is a platform or ladder (PS: no idea why the row/col flipped here!)
        //console.log("can move left? " + moveLeft);
        return moveLeft;
    }

*/


    isValidMove(row, col) {
        return (row >= 1 && col >= 1 && row <= NUM_TILES_PER_ROW && col <= NUM_TILES_PER_COL);
    }

    hasCollidedWith(goal) {
        return (this.row == goal.row && this.col == goal.col);
    }

}

function getPlayerStartPosition( levelNumber ) {
//this.getPlayerStartPosition = function(levelNumber) {
    let playerPosition = {
        "x" : 0,
        "y" : 0,
    };

    if (levelNumber == 0) {
        playerPosition.x = 1;
        playerPosition.y = 5;
    } else if (levelNumber == 1) {
        playerPosition.x = 1;
        playerPosition.y = 5;

    } else if (levelNumber == 2) {
        playerPosition.x = 0;
        playerPosition.y = 0;

    } else if (levelNumber == 3) {
        playerPosition.x = 5;
        playerPosition.y = 8;

    } else if (levelNumber == 4) {
        playerPosition.x = 7;
        playerPosition.y = 7;

    } else if (levelNumber == 5) {
        playerPosition.x = 2;
        playerPosition.y = 1;

    }

    return playerPosition;

}
