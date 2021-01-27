class Ball{
    constructor(x,y,width,height,angle){
        var options={
            density:1,
            frictionAir: 0.005
        }
        this.body=Bodies.rectangle(x,y,width,height,options);
        this.width=width;
        this.height=height;
        World.add(world,this.body);
    }
    display(){
        var angle=this.body.angle;
        stroke("#00b36b")
        strokeWeight(9)
        fill("#66ffc2")
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        ellipse(0,0,this.width,this.height);
        pop();
    }
}