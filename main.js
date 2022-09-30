canvas=document.getElementById("myCanvas");
caneta=canvas.getContext("2d");
largurapug=100;
alturapug=90;
paneta="mars.jpg";
pug2="pug bonito.webp";
pug2X=10;
pug2Y=10;
function pug(){
    planetaPug=new Image();
    planetaPug.onload=pugLevaPedrona;
    planetaPug.src=paneta;
    imgpug=new Image();
    imgpug.onload=pugLevaPedrinha;
    imgpug.src=pug2;
}
function pugLevaPedrinha(){
    caneta.drawImage(imgpug,pug2X,pug2Y,largurapug,alturapug);
}
function pugLevaPedrona(){
    caneta.drawImage(planetaPug,0,0,canvas.width,canvas.height);
}
window.addEventListener("keydown",myKeyDown);
function myKeyDown(e){
    keyPressed=e.keyCode;
    if(keyPressed=="38"){
    up()   
}
if(keyPressed=="40"){
   down()
}
if(keyPressed=="37"){
    left()   
}
if(keyPressed=="39"){
    right()   
}
}
function up(){
    if(pug2Y>=0){
        pug2Y=pug2Y-10;
        pugLevaPedrona()
        pugLevaPedrinha()
    }
}
function down(){
    if(pug2Y<=500){
        pug2Y=pug2Y+10;
        pugLevaPedrona()
        pugLevaPedrinha()
    }
}
function right(){
    if(pug2X<700){
        pug2X=pug2X+10;
        pugLevaPedrona()
        pugLevaPedrinha()
    }
}
function left(){
    if(pug2X>0){
        pug2X=pug2X-10;
        pugLevaPedrona()
        pugLevaPedrinha()
    }
}