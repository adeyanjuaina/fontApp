nosex=0;
nosey=0;
leftWristx=0;
rightWristx=0;
difference=0;


function setup() {

    video=createCapture(VIDEO);
    video.size(550,500);

    canvas=createCanvas(500,500);
    canvas.position(560,160);

    poseNet=ml5.poseNet(video,modelloaded)
     poseNet.on('pose',getposes)
}

function modelloaded () {
    console.log("poseNet is starting")

}
function getposes(results) {
if(results.length>0){
    console.log(results);
    
  

    leftWristx=results[0].pose.leftWrist.x;
    rightWristx=results[0].pose.rightWrist.x;

    difference=floor(leftWristx-rightWristx);
}
}

function draw() {
    background("#32b87b");
     
    fill("#f59fc1");
    
    textSize(difference)
    text("Demi",50,400)
    document.getElementById("square_size").innerHTML="fontsize will be- "+difference+"px";

}
