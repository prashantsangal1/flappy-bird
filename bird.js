class Bird{
    constructor(){
        this.body = Bodies.rectangle(50,175,10,10);
        this.image = loadImage("images/flappybird.gif");
    }
    display(){
        image(this.image,this.body.position.x,this.body.position.y,50,50);
    }
}