load_status="";

object=[];
audio="";
audio_status=false;
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
   object_detector.detect(video,gotResult);
   for(i=0; i<object.length;i++)
   {

    if(load_status !="")
    {
      if(object.length<0)
 {
    document.getElementById("status").innerHTML="baby not detected";
    audio.play();
    audio_status=true;
 }
 else
 {

    if(object[i].label=="person")
   {
    document.getElementById("status").innerHTML="baby is detected";
    if(audio_status==true)
    {
    audio.stop();
    audio_status=false;
    }
   }
   else
   {
    document.getElementById("status").innerHTML="baby not detected";
    audio.play();
    audio_status=true;
   }
 }
   }
}


}


function modelLoaded()
{ 
    console.log("model is loaded");
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
    load_status="true";
 }

 
}




