class Globo {
  constructor(x,y) {
    this.x = x;
    this.y = y;
    this.d = random(100,150);
    this.col = color(random(255),random(255),random(255));
    this.vx = 0.0;
    this.vy = 0.0;
  }
  update() {
    this.vy -= random(0.02, 0.05);
    this.vx += random(-0.1, 0.1);
    this.x = this.x + this.vx;
    this.y = this.y + this.vy;
  }
  show() {
    push();
    fill(this.col);
    translate(this.x, this.y);
    ellipse(0, 0, this.d,this.d);
    translate(0,this.d/2+5);
    triangle(0,-5,-5,0,5,0);
    pop();
  }
}