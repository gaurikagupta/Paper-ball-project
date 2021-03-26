class Paper {
   constructor(x, y, radius) {
      var options = {
          'isStatic':false,
          'restitution':0.3,
          'friction':1,
          'density':1.2
          
      }
      this.body=Bodies.circle(x,y,radius,options);
      this.radius=radius;
      this.image = loadImage("Sprites/paper2.png");
      World.add(world, this.body);
    }
display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      rectMode(CENTER);
      strokeWeight(4);
      stroke("green");
      fill("green");
      circle(0, 0, this.radius);
      imageMode(CENTER);
      image(this.image, 0, 0, this.radius);
      pop();
    }
  }

