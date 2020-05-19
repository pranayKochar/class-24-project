// You could have multiple flags like: start, launch to indicate the state of the game.

const { Engine, World, Bodies, Body, Mouse, MouseConstraint, Constraint, Composite, Detector } = Matter;
// The above line creates different constant variables for Engine, World, Bodies etc.

/*
const {Engine} = Matter 
is the same as const Engine = Matter.Engine
*/



var ground;

function setup() { 
    // Setup the canvas, the ground the, tanker, the shooting ball and the bubble balls. 
    engine=Engine.create(); 
    world=engine.world;
     createCanvas(1200,600);
     ground= new Ground(600,590,1200,20); 
     tanker= new Tanker(150,570,100,20); } 
     function draw() { // Remember to update the Matter Engine and set the background.
         Engine.update(engine); 
         ground.display(); 
         tanker.display(); }



function keyReleased() {
    // Call the shoot method for the cannon.
}