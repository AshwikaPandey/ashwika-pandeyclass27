class Bob{
constructor(x,y){

var options = {
    restitution: .04,
    friction:6,
    density: 1.2,
    isStatic: true
}
this.body = Bodies.circle(x,y,20,options)
this.width = 20;
this.height= 20;
World.add(world, this.body)
}

display(){
var pos = this.body.position
push()
fill("red")
translate(pos.x,pos.y)
ellipseMode(RADIUS)
ellipse(0,0,this.width,this.height)


pop()

}


}