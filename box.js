class Box
{
    constructor(x,y,width,height)
    {
        var options={
            isStatic:false,
            restitution:0,
            friction:2,
            density:1.5
        }
        this.width=width;
        this.height=height;
        this.body=Bodies.rectangle(x,y,width,height,options);
        
        World.add(world,this.body);
    }
    display()
    {
        var pos=this.body.position;
        var angle=this.body.angle;
        push();
        translate(pos.x,pos.y);
        rotate(angle);
        rectMode(CENTER);
        fill("lightblue");
        strokeWeight(4)
        stroke("blue")
        rect(0,0, this.width,this.height,angle);
        pop();
    }

}