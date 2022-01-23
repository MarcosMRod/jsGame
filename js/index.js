const gebi = (x) => document.getElementById(x);
class Player {
  constructor() {
    this.id = "player";
    this.node = gebi(this.id);
    this.position = [0, 0];
    this.velocity = 200;
    this.keyUp = "";
  }

  up() {
    if (this.position[0] > -300) {
      this.position[0] -= 1 * this.velocity;
      this.node.style.marginTop = `${this.position[0]}px`;
    }
  }
  down() {
    if (this.position[0] < 300) {
      this.position[0] += 1 * this.velocity;
      this.node.style.marginTop = `${this.position[0]}px`;
    }
  }
  left() {
    if (this.position[1] > -640) {
      this.position[1] -= 1 * this.velocity;
      this.node.style.marginLeft = `${this.position[1]}px`;
    }
  }
  right() {
    if (this.position[1] < 640) {
      this.position[1] += 1 * this.velocity;
      this.node.style.marginLeft = `${this.position[1]}px`;
    }
  }
  defend() {
    this.node.className = "player defendido";
    setTimeout(() => {
      this.node.className = "player";
    }, 1700);
  }
  attack() {
    this.node.className = "player atacando";
    setTimeout(() => {
      this.node.className = "player";
    }, 500);
  }
  resetPosition() {
    this.node.style.top = "0px";
    this.node.style.left = "-420px";
    this.position = [0, -420];
  }
}

const Bird = new Player();

let down = false;

document.addEventListener(
  "keydown",
  (e) => {
    if (down) return;
    down = true;
    gebi(e.key).focus();
    if (gebi("w") === document.activeElement) {
      Bird.up();
    }
    if (gebi("s") === document.activeElement) {
      Bird.down();
    }
    if (gebi("a") === document.activeElement) {
      Bird.left();
    }
    if (gebi("d") === document.activeElement) {
      Bird.right();
    }
    if (gebi("i") === document.activeElement) {
      Bird.defend();
    }
    if (gebi("l") === document.activeElement) {
      Bird.attack();
    }
  },
  false
);
document.addEventListener(
  "keyup",
  (e) => {
    down = false;
  },
  false
);
