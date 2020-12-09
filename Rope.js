class Rope{
constructor(body1,body2,offsetX,offsetY){
    this.offsetX=offsetX
    this.offsetY= offsetY
var options={
    bodyA:body1,
    bodyB:body2,
    lenght:10,
    stiffness:0.05,
    pointB:{x:this.offsetX,y:this.offsetY}
    }
//this.pointB= pointB,
//this.rope= Constraint.create(options)
this.rope=Constraint.create(options)
World.add(world,this.rope)

}

display(){
var pointA= this.rope.BodyA.position
var pointB= pointB
//var pointC= this.rope.BodyB.position
line(pointA.x,pointA.y,pointB.x,pointB.y)


}




}