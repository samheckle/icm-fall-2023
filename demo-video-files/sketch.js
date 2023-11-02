let vid;
let clippedVideo;
let playing = true;

function setup() {
  // put setup code here
  pixelDensity(1)
  vid = createVideo("ocean-waves.mov", vidLoaded);
  clippedVideo = createImage(vid.width, vid.height);
}

function draw() {
  // put drawing code here
  image(vid, 0, 0, width, height);

  push();
  imageMode(CENTER);
  rectMode(CENTER);
  vid.loadPixels();
  clippedVideo.loadPixels();
  for (let x = 0; x < vid.width; x++) {
    for (let y = 0; y < vid.height; y++) {
      let i = (y * vid.width + x) * 4;
      // red channel
      clippedVideo.pixels[i] = vid.pixels[i];
      // green channel
      clippedVideo.pixels[i + 1] = vid.pixels[i + 1];
      // blue channel
      clippedVideo.pixels[i + 2] = vid.pixels[i + 2];
      // alpha channel

      // get the distance from the center of the circle to the edge of the circle and calculating which x and y values are equal to that
      // clippedVideo.pixels[i + 3] = 255;
      if (x > 50) {
        clippedVideo.pixels[i + 3] = 255;
      } else {
        clippedVideo.pixels[i + 3] = 0;
      }
    }
  }
  vid.updatePixels();
  clippedVideo.updatePixels();
  // noStroke()
  // fill(255)
  // image(clippedVideo, width / 3, height / 2, 300, 300);
  image(clippedVideo, 0, 0, width, height)
  // rect(width/3, height/2, 300, 300)
  // fill(0)
  // ellipse(width/3, height/2, 100)

  pop();

  push();
  imageMode(CENTER);
  translate(width, 0);
  scale(-1, 1);
  image(vid, width / 3, height / 2, 300, 300);
  pop();
}

function vidLoaded() {
  // createCanvas(vid.width, vid.height)
  createCanvas(window.innerWidth, window.innerHeight);
  vid.play();
  vid.loop();
  // vid.speed(2)
}
