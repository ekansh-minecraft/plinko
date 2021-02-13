class Plinko
{
    constructor(x,y,r)
    {
        var options = {

            isStatic:true
        }

         this.body = Bodies.rectangle(x,y,r,r, options)
         this.r = r
        World.add(world,this.body)
    }
    display()
    { 
        var pos = this.body.position;
        //var angle = this.body.angle;
        fill("white")
        rectMode(CENTER)
        rect(pos.x,pos.y,this.r,this.r)
    

    }
}