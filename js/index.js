class Player {
  constructor() {
    this.player = $("#player");
    this.position = [0, 0];
    this.v = 80;
  }
  refreshPosition() {
    this.player.css({
      left: this.position[0],
      top: this.position[1],
    });
  }
  move(x, y) {
    this.position[0] += x * this.v;
    this.position[1] += y * this.v;
    this.refreshPosition();
  }

  up() {
    this.position[1] > -200 && this.move(0, -1);
  }
  down() {
    this.position[1] < 200 && this.move(0, 1);
  }
  left() {
    this.position[0] > -350 && this.move(-1, 0);
  }
  right() {
    this.position[0] < 350 && this.move(1, 0);
  }
}
const Bird = new Player();

$("body").keydown(({ originalEvent: { key: key } }) => {
  switch (key) {
    case "w":
      return Bird.up();
    case "s":
      return Bird.down();
    case "a":
      return Bird.left();
    case "d":
      return Bird.right();
    default:
  }
});
