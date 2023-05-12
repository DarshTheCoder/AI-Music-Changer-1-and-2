song1="";
song2="";
function preload(){
    song1=loadSound("Mother Mom Special - Birthday Song.mp3");
    song2=loadSound("Sultan-KGF 1.mp3");
}
function setup()
{
    canvas=createCanvas(540,430);
    canvas.center();
    video=createCapture(VIDEO);
   video.hide();
}
function draw(){
    image(video,0,0,540,430)
}