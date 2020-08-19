class Plinko {
    constructor(x , y , radius){
        var options = {
            isStatic: false
        }
        this.body = Bodies.circle(x , y , this.r , options);
        this.color==color(random(0,255), random(0,255));
        World.sdd(world, this.body)
    }
}