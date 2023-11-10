let mic

function setup() {
  // put setup code here
  createCanvas(window.innerWidth, window.innerHeight)


  mic = new p5.AudioIn()
  mic.start()
}

function draw() {
  background('lightpink')
  let micLevel = mic.getLevel()

  // console.log(micLevel)

  circle(width/2, height/2, micLevel * 1000)
}