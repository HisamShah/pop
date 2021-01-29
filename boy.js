class Boy extends BaseClass{
    constructor(x,y,width,height){
      super(x,y,width,height);
      this.image = loadImage("images/boy.png");
      Matter.Body.setAngle(this.body);
    }
  }