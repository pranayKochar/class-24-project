class Tanker {
  constructor(x,y,width,height) {
    var options = {
        isStatic: true
    }
    this.body = Bodies.rectangle(x,y,width,height,options);
    this.width = width;
    this.height = height;
    World.add(world, this.body);
  }
  display(){
    var pos =this.body.position;
    rectMode(CENTER);
    fill("white");
    circle(pos.x,pos.y-40,this.width-10)
    rect(pos.x, pos.y-20, this.width, this.height);
    rect(pos.x, pos.y, this.width, this.height);
    
  }
}
