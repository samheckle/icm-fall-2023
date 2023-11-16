let sound

// note ratios to send to the rate function
// western diatonic scale ratio
let notes = [1, 1.125, 1.25, 1.334, 1.5, 1.667, 1.875, 2]
// pentatonic scale ratio
// [1, 1.125, 1.25, 1.5, 1.67, 2]
// arabic scale
// [1, 1.067, 1.25, 1.34, 1.5, 1.6, 1.875, 2]

let oscs = []
let basefreq = 300

function preload(){
  sound = loadSound('bell.wav')
}

function setup() {
  // put setup code here
  createCanvas(window.innerWidth, window.innerHeight)

}

function draw() {
  background('violet')
  for(let i = 0; i < oscs.length; i++){
    // local variable to store current osc
    let osc = oscs[i]
    let vol = osc.amp().value

    if (vol >= 1){
      // fade out the sound over a period of 5 seconds
      osc.amp(0, 5)
    } else if(vol <= 0){
      osc.stop()
      oscs.splice(i, 1)
    }

  }
}

function keyPressed(){
  // https://p5js.org/reference/#/p5.Oscillator
  let osc = new p5.Oscillator()
  osc.setType('sine')
  osc.freq(basefreq * random(notes))
  osc.start()
  osc.amp(0)
  // fade in sound over 5 seconds
  osc.amp(1, 5)

  oscs.push(osc)
}