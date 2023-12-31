function setup(){
    canvas = createCanvas(500, 350);
    canvas.position(750, 150);

    video = createCapture(VIDEO);
    video.size(420, 395);
    video.position(300, 225)

    posenet = ml5.poseNet(video, modelLoaded);
    posenet.on("pose", gotPoses);
}

function modelLoaded(){
    console.log('Model is Loaded!');
}

var leftWristx = 0;
var rightWristx = 0;
var difference = 0;

function gotPoses(results){
    if(results.length > 0){
        console.log(results);

        leftWristx = results[0].pose.leftWrist.x;
        rightWristx = results[0].pose.rightWrist.x;
        difference = Math.floor(leftWristx - rightWristx);

        document.getElementById("font_size").innerHTML = "Current font size = " + difference;
    }
}

function draw() {
    background('#F7899F');
    textSize(difference);
    fill('#ffffff');
    text('Hello World!', 30, 300);
}