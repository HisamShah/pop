class Mango{
    constructor(x,y,r){
        var options = {
            friction: 1,
            restitution:0,
            isStatic:true
          }
          this.x=x
          this.y=y
          this.r=r
          this.body=Bodies.circle(this.x,this.y,this.r/2,options);
          this.image = loadImage("images/mango.png");
          World.add(world,this.body);
        }
        display(){
            var mangopos=this.body.position;
            push();
            translate(mangopos.x,mangopos.y);
            imageMode(CENTER);
            image(this.image,0,0,this.r,this.r)
            pop();
        }
}