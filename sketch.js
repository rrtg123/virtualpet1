//Create variables here
var dog,happyDog,database,foodS,foodStock,dogImage,happyDogImage
function preload()
{
  //load images here
  dogImage=loadImage('images/dogImg.png')
  happyDogImage=loadImage('images/dogImg1.png')
}

function setup() {
	createCanvas(500, 500);
  dog=createSprite(300,200,50,50)
  dog.addImage(dogImage)
  dog.scale=0.5
  database=firebase.database()
  foodStock=database.ref('Food')
  foodStock.on("value",readStock)

}


function draw() {  
background(46, 139, 87)
if(keyWentDown(UP_ARROW)){
  writeStock(foodS);
  dog.addImage(happyDogImage)
 // dog.scale=0.5
}
  drawSprites();
  //add styles here
textSize(30)
fill("yellow")
stroke("red")
text("foodStock",300,300)


}


function readStock(data){
foodS=data.val();
}
function writeStock(x){
  
  database.ref('/').update({
  Food:x
})
}

