let video;
let poseNet;
let poses = []

function setup() {
  // put setup code here
  createCanvas(600, 480);
  video = createCapture(VIDEO);
  video.size(width, height);
  poseNet = ml5.poseNet(video, () => {
    console.log('model is ready')
  });
  
  // initialization code to fill the global variable poses
  poseNet.on("pose", (results) => {
    poses = results
  })
  
  video.hide()
}

function draw() {
  
  background('darkblue')
  // put drawing code here
  // translate(width, 0)
  // scale(-1, 0)
  image(video, 0, 0, width, height)
  if( poses.length > 0){
    // get the first person
    // poses[0].pose.nose
    let pose = poses[0].pose
    let leftShoulder = pose.leftShoulder
    
    fill('white')
    let sx = map(leftShoulder.x, 0, video.width, 0, width)
    let sy = map(leftShoulder.y, 0, video.height, 0, height)
    circle(sx, sy, 100)
    
    let nose = pose.nose
    circle(nose.x, nose.y, 20)
  }
}

function modelReady(){
  console.log('model is ready')
}

function mousePressed(){
  console.log(poses)
}
