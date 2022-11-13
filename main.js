load_status="";

object=[];
audio="";
function preload()
{
 audio=loadImage("one_call_away.mp3");
}

function setup()
{
 canvas=createCanvas(380,380);
 canvas.center();

video=createCapture(VIDEO);
video.hide();

}

function start()
{
   object_detector=ml5.objectDetector("cocossd", modelLoaded);
   document.getElementById("status").innerHTML="status: detecting objects";
}

function draw()
{
    image(video,0,0, 380, 380);
    if(object[0].label=="person")
   {
    document.getElementById("status").innerHTML="baby is detected";
    audio.stop();
   }
   else
   {
    document.getElementById("status").innerHTML="baby not detected";
    audio.play();
   }

 if(objects[i].length<0)
 {
    document.getElementById("status").innerHTML="baby not detected";
    audio.play();
 }


}


function modelLoaded()
{ 
    console.log("model is loaded");
    load_status="true";
}

function gotResult(error, results)
{
 if(error)
 {
    console.error(error);
 }
 else
 {
    console.log(results);
    object=results;
 }

 
}




