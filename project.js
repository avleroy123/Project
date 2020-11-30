drawBackground();
drawAllStars();
drawAllMoons();
drawAllTrees();
drawAllHouses();
drawAllFlag();

function drawBackground(){
  penColor("DarkBlue");
  dot(1000);
  penUp();
  moveTo(150,450);
  penDown();
  penColor("green");
  dot(200);
  penUp();
}
function drawAllMoons(){
  for (var i = 0; i < 2; i++) {
    drawMoon(randomNumber(25,50), randomNumber(150,250),randomNumber(150,250),randomNumber(150,250)); 
}
}
function drawAllStars(){
  for (var i = 0; i < 30; i++) {
    moveTo(randomNumber(0,500), randomNumber(0,250));
    penDown();
    drawStar(20,5);
  }
}
function drawStar(size,width){
  
  // Setting up the pen
  
  penRGB(255, 255, 255);
  penWidth(width);
  penDown();
  
  turnTo(0);
  moveForward(size);
  turnRight(144);
  moveForward(size);
  turnRight(144);
  moveForward(size);
  turnRight(144);
  moveForward(size);
  turnRight(144);
  moveForward(size);
  turnRight(144);
  penUp();
}
function drawMoon(size, r, g, b) {
penUp(); 
moveTo(randomNumber(30,250), randomNumber(50,225));  
penWidth(size);
penRGB(r, g, b);
dot(size); 
  
}
function drawAllFlag(){
for (var i = 0; i < 10; i++) {
  drawFlag();
}
}
function drawFlag(){
  penWidth(5);
penColor("black"); 
penUp();
turnTo(randomNumber(0,25));
moveTo(randomNumber(0,355),randomNumber(300,450));
penDown();
moveForward(20);
turnRight(90);
penWidth(7); 

  for (var i = 0; i < 5; i++) {
    penRGB(randomNumber(50,200),randomNumber(50,200),randomNumber(50,200));
    moveForward(25);
turnLeft(90);
moveForward(2);
turnLeft(90);
penRGB(randomNumber(50,200),randomNumber(50,200),randomNumber(50,200));
moveForward(25);
turnRight(90);
moveForward(2);
turnRight(90);
  }
  penWidth(6);
  penColor("red");
  moveForward(25);
}

function drawTrees(size, color, leafSize) {
  penUp();
  moveTo(randomNumber(0, 280), randomNumber(290, 330));
  turnTo(0);
  penWidth(size);
  //Trunk
  penColor("brown");
  
  
  penDown();
  moveForward(size + 15);
  //Leaves
  turnLeft(90);
  penColor(color);
   for (var i = 0; i < 8; i++) {
  dot(size / 2);
  moveForward(leafSize);
  turnRight(50);
  
   }
}

function drawAllTrees() {
  for (var i = 0; i < randomNumber(0, 2); i++) {
  drawTrees(randomNumber(30, 50), "green", randomNumber(8, 16));
}

for (i = 0; i < randomNumber(0,2); i++) {
  drawTrees(randomNumber(30, 50), "red", randomNumber(8, 16));
}

for (i = 0; i < randomNumber(0,2); i++) {
  drawTrees(randomNumber(30, 50), "yellow", randomNumber(8, 16));
}
}

function drawHouses(size, r, g, b) {
  penUp();
  penWidth(size);
  moveTo(randomNumber(0, 280), randomNumber(290, 440));
  penColor(rgb(r, g, b));
  turnTo(0);
  penDown();
  moveForward(size);
  turnTo(45);
  moveForward(size);
  turnTo(135);
  moveForward(size);
  turnTo(180);
  moveForward(size);
  turnRight(90);
  moveForward(size);
  
  penUp();
  turnTo(90);
  moveForward(size / 2);
  turnLeft(90);
  moveForward(10);
  penDown();
  
  
  penWidth(5);
  penColor("black");
  moveForward(size / 2);
  turnLeft(90);
  moveForward(size / 2);
  turnLeft(90);
  moveForward(size / 2);
  turnLeft(90);
  moveForward(size / 2);
  penWidth(size * 1.5);
  penColor(rgb(r, g, b));
  
  
  
  
  
  
  
}

function drawAllHouses() {
  for (var i = 0; i < randomNumber(0,2); i++) {
    drawHouses(randomNumber(20, 40), randomNumber(0, 255), randomNumber(0, 255), randomNumber(0, 255));
  }
  
}
