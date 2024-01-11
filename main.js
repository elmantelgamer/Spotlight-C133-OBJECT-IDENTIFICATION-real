img="";
status="";
objects=[];
function preload(){
    img=loadImage('dog_cat.jpg');
}
function draw(){
    image(img,0,0,640,420);
    if(status!=""){
        for(i=0;i<objects.length;i++){
            document.getElementById("status").innerHTML="Status :Object Detected";
            fill("red");
            stroke("red");
            noFill();
            percent=floor(objects[i].confidence*100);
            text(objects[i].label+" "+percent+"%",objects[i].x+15,objects[i].y+15);
            rect(objects[i].x,objects[i].y,objects[i].width,objects[i].height);
        } 
    
    }

}
function setup(){
canvas=createCanvas(640,420);
canvas.center();

objectdetector=ml5.objectDetector('cocossd',modelLoaded);
document.getElementById("status").innerHTML="Status:detecting objects";
}
function modelLoaded(){
    console.log("Model is loaded.");
    status=true;
    objectdetector.detect(img,gotResult);
}
function gotResult(error,results){
console.log(results);
if(error){
    console.log(error);
}
objects=results;
}