noseX=0;
noseY=0;
rightwristX=0;
leftwristX=0;
difference=0;
function setup(){
    canvas=createCanvas(500,500);
    canvas.position(560,150);
    video=createCapture(VIDEO);
    video.size(550,500);
    posenet=ml5.poseNet(video,modelloaded);
    posenet.on('pose',gotposes);
}
function modelloaded(){
console.log("model is loaded");
}
function gotposes(results){
    if(results.length>0){
        console.log(results);
        noseX=results[0].pose.nose.x;
        noseY=results[0].pose.nose.y;
        leftwristX=results[0].pose.leftWrist.x;
        rightwristX=results[0].pose.rightWrist.x;
        difference=Math.floor(leftwristX-rightwristX);
    }
}
function draw(){
    background("grey");
    fill("blue");
    textSize(difference);
    text("Dhriti",50,400);
    document.getElementById("fontsize").innerHTML="font size of the text will be- "+difference+"px";
}