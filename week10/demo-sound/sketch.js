let song

let button

let backCol = 0

function preload(){
  song = loadSound('assets/byte.mp3')
}

function setup() {
  // put setup code here
  createCanvas(window.innerWidth, window.innerHeight)
  background('maroon')

  button = createButton('play')
  button.position(width/2, height/2)
  button.mousePressed(playing)

  // addCue(time, callback, [value])
  for(let i = 2; i < 20; i+=4){
    song.addCue(i, changeBackground, color(random(255), random(255), random(255)))
  }
  
}

function draw() {
  // put drawing code here
  // print(song.currentTime())
  // if(song.currentTime() > 5){
  //   background('lightpink')
  // }
  background(backCol)
}

function playing(){
  if(song.isPlaying()){
    song.pause()
    button.html('play')
  } else{
    song.play()
    button.html('pause')
  }
  // 0 and 1.0 as param for volume
  song.setVolume(1.0)
}

function changeBackground(passedInColor){
  // backCol = color(random(255), random(255), random(255))
  backCol = passedInColor
}