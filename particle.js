class Particle
{
    constructor(x,y,r,r)
    {
        var options = {

            restitution:0.4
        }
 
         
        this.body = Bodies.rectangle(x,r,w,h,options)
        this.color = color(random(0,255),random(0,255),random(0,255))
        this.r = r
        World.add(world,this.body)
    }
    display()
    {
        var pos = this.body.position;
        rectMode(CENTER)
        fill(this.color)
        rect(pos.x,pos.y,this.r,this.r)
    }
}


