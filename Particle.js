class Particle {
    constructor(x, y, w, h) {
        var options = {

            isStatic: true
        }
        this.body = Bodies.rectangle(x, y, w, h, options);
        this.w = w;
        this.h = h;
        World.add(world, this.body);
    }
    display() {
        var pos = this.body.position;
        rectMode(CENTER);
     this. body = Bodies. circle(x, y, this. r, options);
    random (0, 255);
    this.color=color(random(0,255),random(0,255));
    World.add (world, this. body) ;

        rect(pos.x, pos.y, this.w, this.h);
    }
};