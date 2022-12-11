img="";
status="";
function preload()
{
    img=loadImage("dog_cat.jpg");

}
function setup()
{
    canvas=createCanvas(640,420);
    canvas.center();
    objectdetector=ml5.objectDetector('cocossd',modelLoded);
    document.getElementById("status").innerHTML=("Status : Detecting Objects");

}
function modelLoded()
{
    console.log("modelLoaded");
    status=true;
    objectdetector.detect(img, gotResult);
}
function gotResult(error,results)
{
    if(error)
    {
        console.error(error);
    }
    else
    {
        console.log(results);
    }

}
function draw()
{
    image(img,0,0,640,420);
    fill("#FF0000");
    text("Dog",45,75);
    noFill();
    stroke("#FF0000");
    rect(30,60,450,350);
    fill("#FF0000");
    text("Cat",320,90);
    noFill();
    stroke("#FF0000");
    rect(300,60,270,340);
    

}
