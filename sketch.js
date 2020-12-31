//Create variables here
var dog
var HappyDog
var Database
var foodS
var foodStock
function preload()
{
  //load images here
  this.image=loadImage("doglmg1.png");
  this.image=loadImage("doglmg.png");
  
}

function setup() {
  createCanvas(500, 500);
  dog=createSprite(100,50,)
dog.adddImage(doglmg.png)
  database=firebase.database();
  foodStock=database.ref(food);
  foodStock.on("value",readStock);
}


function draw() {  
if(keyWentDown(UP_ARROW)){
  writeStock(foodStock)
  dog.addImage(doglmg1.png);
}
  drawSprites();
  //add styles here
 text=
  textSize=23

  function readStock(data){
    foodS=data.val();
  }

 function writeStock(x){
   
  if(x<=0);{
    x=0;
  }else{
      x=x-1
    }

 database.ref('/').update({
   food:x
 })
 }