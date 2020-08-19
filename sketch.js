const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;

var particles = [];
var plinkos = [];
var divisions = [];
var divisionHeight = 300;





function setup() {
  createCanvas(800,480);
  createSprite(400, 200, 50, 50);
}

function draw() {
  background(255,255,255);  
 for(var k = 0; k<=innerWidth; k = k+80){
   divisions.push(new Divisions(k, height -divisionHeight/2,10, divisionHeight));
 }
 for(var j = 0; j<=innerWidth; j=j+50){
   plinkos.push(new Plinko(j,75));
 }
 for(var j = 15; j <=width-10; j= j+50){
   plinkos.push(new Plinko(j,175));
 }
 for(var j =0; j< particles.length; j++){
   particles[j].display();
 }
 for (var k = 0; k<ivisions.length; k++){
   divisions[k].display();
 }
  drawSprites();
}