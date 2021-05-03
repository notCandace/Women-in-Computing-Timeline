class Platform {
  //maybe eventually have different types of platforms (appearance wise)
  constructor(row, col, type) {
    this.row = row;
    this.col = col;
    this.size = TILE_SIZE; //width/height
    this.type = type;
    if(this.type == PLATFORM) {
      this.image = loadImage("assets/tiles/platform.png");
    } else if(this.type == LADDER) {
      this.image = loadImage("assets/tiles/off_ladder.png");
    } else if(this.type == GOAL) {  //it's the goal (door to next level)
      this.image = loadImage("assets/tiles/off_door.png");
    }

  }

  draw() {
    image(this.image, this.row, this.col, TILE_SIZE, 10);
  }

}
