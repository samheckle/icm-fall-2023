let mic
let recorder

let sounds = []

let recordingMode = 0

function setup() {
  // put setup code here
  createCanvas(window.innerWidth, window.innerHeight)
  background('lightpink')

  mic = new p5.AudioIn()
  mic.start()

  recorder = new p5.SoundRecorder()
  recorder.setInput(mic)

  text('press spacebar to record', width/2, height/2)
}

function draw() {
  let micLevel = mic.getLevel()
  console.log(micLevel)
}

function keyPressed(){
  if(keyCode == 32){
    // console.log('space pressed')
    if(recordingMode == 0 && mic.enabled){
      let sound = new p5.SoundFile()
      sounds.push(sound)

      background('red')

      text('recording!', width/2, height/2)

      recordingMode = 1

    } else if(recordingMode == 1){

      recorder.stop() 

      background('lightpink')

      text('press space to record!', width/2, height/2)

      recordingMode = 2
    } 

    if (recordingMode == 2){
      sounds[sounds.length - 1].loop()
      recordingMode = 0
    }
  }
}