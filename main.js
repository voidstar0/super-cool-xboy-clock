let seconds, minutes, hours = 0;
let img;

function preload() {
    img = loadImage('https://i.imgur.com/sKKXXQa.png');
}

function setup() {
    createCanvas(200, 200);
    angleMode(DEGREES);
    background(76, 112, 255);
}

function draw() {    
    seconds = second();
    minutes = minute();
    hours = hour();

    let secondsHand = map(seconds, 0, 59, 0, 360);
    let minutesHand = map(minutes, 0, 59, 0, 360);
    let hoursHand = map(hours % 12, 0, 12, 0, 360);
    
    translate(width / 2, height / 2);
    imageMode(CENTER);
    image(img, 0, 0);
    rotate(-90);

    push();
    rotate(secondsHand);
    stroke(255, 0, 0);
    line(0, 0, 80, 0);
    pop();

    push();
    rotate(minutesHand);
    stroke(0, 0, 0);
    line(0, 0, 70, 0);
    pop();

    push();
    rotate(hoursHand);
    stroke(0, 0, 0);
    line(0, 0, 40, 0);
    pop();
    
}