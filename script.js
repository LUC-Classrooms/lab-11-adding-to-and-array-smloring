
/*
COMP 125 Lab 11 - Adding to an Array with mouse clicks
Step 1 - add a line of code to function mousePressed() that will add a new object to the array when the mouse is pressed. The first part (creating a new object where the mouse is pressed) is done for you. Just add the line that appends it to the array.
Step 2 - add comments explaining each line of code in this sketch.
*/
var dots = new Array(1);

function setup() {
  createCanvas(500, 300); //canvas 
  dots[0] = new Dot(width/2, height/2); // dot size 
}

function draw() {
  background(200); //grey bacground 
  
  for(let i = 0; i < dots.length; i++){ 
    dots[i].move();  // move dot
    dots[i].display(); //display dot
  }
  textSize(24); // text size 
  fill(100, 0, 200); // text color 
  text("'dots' array length: " + dots.length, 100, 100); //text on screen 

}

function mousePressed(){ // detects if mouse is pressed on canvas 
  let obj = new Dot(mouseX, mouseY); //when mouse is pressed on canvas create new dot
  dots.push(obj); // add element to the end of the array 
  /* add a line of code that adds "obj" to the "dots" array. Use the .push() method of the dots array object to append the new "obj" to the end of an existing array. Check the Array.push() documentation first to make sure you are using it correctly.
  */

}


function Dot(X, Y){ //assign x y values 
  
  this.x = X; //assigns x value to dot 
  this.y = Y; //assigns y value to dot 
  this.w = random (20, 50); //determine the width and height of the dot
  this.sx = random(-5, 5); // determine speed of dot
  this.sy = random(-5, 5); //^ determine speed of dot
  this.r = random(0, 255); // determine color of dot (red)
  this.g = random(0, 255); // determine color of dot (green)
  this.b = random(0, 255); // determine color of dot (blue)
  
  this.display = function(){ //display dot on canvas 
    fill(this.r, this.g, this.b); // fill color 
    ellipse(this.x, this.y, this.w, this.w); // draw ellipse (dot)
  }
  
  this.move = function(){ // update position of dot
    this.x += this.sx; //horozontal movement
    this.y += this.sy; // vertical movement 
    
    if (this.x < 0 || this.x > width){ // reverses movement when dot reaches certain width on canvas 
        this.sx *= -1;
    }
    if (this.y < 0 || this.y > height){ // reverses dot movement when reaches certain height on canvas 
        this.sy *= -1; // checks if dot has reached certain height/width 
    }
  }
    
}
