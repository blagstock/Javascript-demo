
var a=0, R=0, G=0, B=0;
var paused = false;

function setup() {
	createCanvas(800, 800);
	frameRate (60);
}

function draw() {
	background (R, G, B);
	
	//draw values of R, G & B
	textSize(32);
	strokeWeight(0);
	fill (255);
	stroke(255);
	text('Red   = ' + R, 10, 30);
	text('Green = ' + G, 10, 67);
	text('Blue  = ' + B, 10, 103);
	
	//draw an arc
	fill(255);
	stroke(0);
	strokeWeight(2);
	arc(width/2, height/2, 400, 400, 0, a/57.2958, PIE);

	// if not paused, call update (increase the size of the arc)
	if (!paused) {
		update();
	}

	// Adjust RED background level if R key is pressed
	if (keyIsDown(82)) {
		R = adjustColor(R);
	}

	// Adjust GREEN background level if G key is pressed
	if (keyIsDown(71)) {
		G = adjustColor(G);
	}

	// Adjust BLUE background level if B key is pressed
	if (keyIsDown(66)) {
		B = adjustColor(B);
	}

}

function update() {
	a++;
	if (a>360) {a = 0;}
}

function adjustColor(color) {
	if (keyIsDown(SHIFT)) {
		color--;
	} else {
		color++;
	}
	
	if (color>255) {color=0;}
	if (color<0) {color=255;}

	return color;
}

function mousePressed() {
	//if mouse button is pressed, alternate between paused or running
	paused = !paused;
}