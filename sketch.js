function setup() {
  NewCanvas(windowWidth, windowHeight)
}

function draw() {
colorMode(HSB);
background(255, 204, 100);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
