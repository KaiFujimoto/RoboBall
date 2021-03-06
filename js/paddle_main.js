class Paddle {
  constructor(options) {
    this.type = options.type;
    this.pos = null;
    this.dim = [25, 84];
    this.color = "white";

    this.setPos();
  }

  setPos() {
    switch (this.type) {
      case "L":
        this.pos = [25, 250];
        break;
      case "R":
        this.pos = [750, 250];
        break;
    }
  }

  posX() {
    return this.pos[0];
  }

  posY() {
    return this.pos[1];
  }

  moveUp() {
    this.pos[1] += 10;
  }

  moveDown() {
    this.pos[1] -= 10;
  }

  paddleBounds(dim) {
    return dim - this.dim[1];
  }

  draw(ctx) {
    ctx.beginPath();
    ctx.fillStyle = this.color;
    ctx.fillRect(this.pos[0], this.pos[1], this.dim[0], this.dim[1]);
    ctx.closePath();
  }

  isCollidedWith(ball) {
    const ballX = ball.nextXPos();
    const ballY = ball.nextYPos();
    const paddleX = this.posX();
    const paddleY = this.posY();

    if ((ballX + (ball.radius) > paddleX) &&
    (ballX + (ball.radius) < (paddleX + this.dim[0])) &&
    (ballY + (ball.radius) > paddleY) &&
    (ballY < (paddleY + this.dim[1] + (ball.radius)))) {
       ball.goLeft();
    } else if (((ballX - (ball.radius)) > paddleX) &&
    ((ballX - (ball.radius)) < (paddleX + this.dim[0])) &&
    (ballY + (ball.radius) > paddleY - (ball.radius)) &&
    (ballY - (ball.radius) < (paddleY + this.dim[1] + (ball.radius)))) {
      ball.goRight();
    }

  }

}

module.exports = Paddle;
