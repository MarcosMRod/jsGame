class Player {
  constructor() {
    this.id = "player";
    this.node = document.getElementById(this.id);
    this.position = [0, 0];
    this.velocity = 80;
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
    document.getElementById(e.key).focus();
    if (document.getElementById("w") === document.activeElement) {
      Bird.up();
    }
    if (document.getElementById("s") === document.activeElement) {
      Bird.down();
    }
    if (document.getElementById("a") === document.activeElement) {
      Bird.left();
    }
    if (document.getElementById("d") === document.activeElement) {
      Bird.right();
    }
    if (document.getElementById("i") === document.activeElement) {
      Bird.defend();
    }
    if (document.getElementById("l") === document.activeElement) {
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
