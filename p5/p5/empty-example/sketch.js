let snowflakes = []; // array to hold snowflake objects



function setup() {
  createCanvas(600, 400);
  fill(240);
  noStroke();
    
}

function draw() {
  background('brown');
    fill(240);
    noStroke();
    arc(300, 370, 210, 50, 0, PI/1.0);
   
    textSize(16);
    textFont("Georgia");
    textStyle(BOLD);
    textAlign(CENTER);
    text('Let us enjoy some snowflakes',300,50);
    //snowman
    fill(240);
    noStroke();
    circle(300, 320, 130);
    circle(300, 240, 100);   
    circle(300, 165, 70);
    fill(0);
    circle(300, 290, 20);
    circle(300, 260, 20);
    circle(300, 230, 20);
    circle(290, 150, 15);
    circle(310, 150, 15);
    //nose
    fill(255, 155, 0);
    triangle(310, 180, 300, 160, 290, 180);
    fill(0);
    arc(300, 185, 30, 10, 0, PI/1.0);//smile arc
    arc(300, 130, 50, 10, 0, PI/1.0);//hat arc
    square(275, 85, 50, 20);//hat 
    line(30, 20, 85, 75);
    
    
    //snowflakes 
    fill(240);
    
    
    
    

    


let t = frameCount / 60; // update time

  // create a random number of snowflakes each frame
  for (let i = 0; i < random(5); i++) {
    snowflakes.push(new snowflake()); // append snowflake object
  }

  // loop through snowflakes with a for..of loop
  for (let flake of snowflakes) {
    flake.update(t); // update snowflake position
    flake.display(); // draw snowflake
  }
}
// snowflake class
function snowflake() {
  // initialize coordinates
  this.posX = 0;
  this.posY = random(-50, 0);
  this.initialangle = random(0, 2 * PI);
  this.size = random(2, 5);

  // radius of snowflake spiral
  // chosen so the snowflakes are uniformly spread out in area
  this.radius = sqrt(random(pow(width / 2, 2)));

  this.update = function(time) {
    // x position follows a circle
    let w = 0.6; // angular speed
    let angle = w * time + this.initialangle;
    this.posX = width / 2 + this.radius * sin(angle);

    // different size snowflakes fall at slightly different y speeds
    this.posY += pow(this.size, 0.5);

    // delete snowflake if past end of screen
    if (this.posY > height) {
      let index = snowflakes.indexOf(this);
      snowflakes.splice(index, 1);
    }
        };

  this.display = function() {
    ellipse(this.posX, this.posY, this.size);
  };

}



    


