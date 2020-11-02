let img;
let song;
let centreX = 1288 / 2;
let centreY = 1004 / 2;
let btn, input, greeting;
var client_id = 'd7039372b7bf2eee25ff93253c0623e8';
var url = 'https://soundcloud.com/houseshoes/a-03-what-up-doe?';

function setup() {
    createCanvas(1288, 1004);
    background(1288, 0, 0);
    //btn = new MidCircle(centreX, centreY);
    //    input = createInput();
    //    input.position(20, 65);
    //

    button = createButton('Play Sound');
    button.position(centreX.x + centreY.y, 65);
    //button.position(19, 19);
    button.mousePressed(playSong);
    //
    //    greeting = createElement('h2', 'what is your name?');
    //    greeting.position(20, 5);

    /*  textAlign(CENTER);
    textSize(50);*/
}

function preload() {
    img = loadImage("https://raw.githubusercontent.com/duffy-k/duffy-k.github.io/master/undersea1.png");
    //      soundFormats('mp3', 'ogg');
    song = loadSound("./uts.mp3");
}

function greet() {
    const name = input.value();
    greeting.html('hello ' + name + '!');
    input.value('');

    for (let i = 0; i < 200; i++) {
        push();
        fill(random(255), 255, 255);
        translate(random(width), random(height));
        rotate(random(2 * PI));
        text(name, 0, 0);
        pop();
    }
}

function MidCircle(x, y) {
    this.x = x;
    this.y = y;
    this.remove = false;

    this.display = function () {
        if (!this.remove) {
            c = color("hsla(160, 100%, 50%, 0.5)");
            fill(c);
            ellipse(this.x, this.y, 150, 150);
            fill(0);
            textSize(100);
            text("?", centreX - 30, centreY + 30);
        }
    };
}

function playSong() {
    if (song.isPlaying()) {
        // .isPlaying() returns a boolean
        song.stop();
        //background(255, 0, 0);
    } else {
        song.play();
        //background(0, 255, 0);
    }
}

function draw() {
    image(img, 0, 0);
    //
}
