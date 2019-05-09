

  const body = document.body;
let frogPosition = {x: 7, y: 6}
let div2Position = {x:16, y:3.5}
let div3Position = {x:8, y:1.3}
let div4Position = {x:8, y:5.6}
let winPosition =  {x:9, y:.5}
 


let frog = document.createElement('div');
  frog.className ='frog';
  body.appendChild(frog);
     frog.style.left = (frogPosition.x * 100) + "px";
     frog.style.top = (frogPosition.y * 100) + "px";


    

let div2 = document.createElement('div');
div2.className = 'car';
body.appendChild(div2);
div2.style.left = (div2Position.x * 100) + "px";
div2.style.top = (div2Position.y * 100) + "px";


let div3 = document.createElement('div');
div3.className = 'car';
body.appendChild(div3);
div3.style.left = (div3Position.x * 100) + "px";
div3.style.top = (div3Position.y * 100) + "px";

let div4 = document.createElement('div');
div4.className = 'car';
body.appendChild(div4);
div4.style.left = (div4Position.x * 100) + "px";
div4.style.top = (div4Position.y * 100) + "px";

let win = document.createElement('div');
win.className = 'car';
body.appendChild(div2);
win.style.left = (winPosition.x * 100) + "px";
win.style.top = (winPosition.y * 100) + "px";


//code to attain height of frog for collision detection//
// https://stackoverflow.com/questions/294250/how-do-i-retrieve-an-html-elements-actual-width-and-height
let frogHeight = frog.offsetHeight;
let frogWidth = frog.offsetWidth;
let carWidth = div2.offsetWidth;
let carHeight = div2.offsetHeight;


//  collision code :
// // //  https://developer.mozilla.org/en-US/docs/Games/Tutorials/2D_Breakout_game_pure_JavaScript/Collision_detection
function collisionY() {
if (frogPosition.y > div2Position.y -.5 && frogPosition.y < div2Position.y -.5 + (carHeight/100)){
  console.log("frog dead")
}}
function collisionX() {
  if (frogPosition.x > div2Position.x && frogPosition.x < div2Position.x + (carWidth/100)){
  console.log("frog dead !!!!!!!!!!")
}
}


  function winRound() {
      if (frogPosition.y > winPosition.y -1 && frogPosition.y < winPosition.y -1 + (carHeight/100)){
        alert("You Win!");
      }}

// //blerf code for keyboard movement, went over in class//

const isCoordinateInGrid = (x, y) => {

  return !(x < 0 || y < 0 || x*100 > window.innerWidth  || y*100 > window.innerHeight );

}

const canMoveTo = (x, y) => {
    if (!isCoordinateInGrid(x, y)) {

         return false;
     }
     return true;
 }
 
 const moveRight = () => {
     if (canMoveTo(frogPosition.x + .5, frogPosition.y)) {
         frogPosition.x += .5;
        
     
         moveCharacterTo();
     }
 }
 
 const moveLeft = () => {
     if (canMoveTo(frogPosition.x - .5, frogPosition.y)) {
         frogPosition.x -= .5;
        
      
        
         
         moveCharacterTo();
     }
     }
 
    
 const moveDown = () => {
     if (canMoveTo(frogPosition.x , frogPosition.y + .5)) {
         frogPosition.y += .5;
         
         moveCharacterTo();
     }
 }
 
 const moveUp = () => {
     if (canMoveTo(frogPosition.x , frogPosition.y - .5)) {
         frogPosition.y -= .5;
      
         moveCharacterTo();
     }
 }
 
 document.body.addEventListener('keydown', evt => {
     const keyCode = evt.keyCode;
  
     if ([37, 38, 39, 40].includes(keyCode)) {
         evt.preventDefault();
     }
     switch (keyCode) {
         case 37:
         moveLeft();
         break;
       case 38:
         moveUp();
         break;
       case 39:
         moveRight();
         break;
       case 40:
         moveDown();
         break;
     }
 })

 //with help from Rachel//
 const moveCharacterTo = (x, y) => {
  const charElement = document.querySelector('.frog');
  charElement.style.left = `${(frogPosition.x * 100)}px`;
  charElement.style.top = `${(frogPosition.y * 100)}px`;
  winRound();
  // collisionY();
  // collisionX();
 }
 

 
const makeCardDrive = (x,y) => {
 
  const car1 = document.querySelector('.car');
   div2Position.x -= .5
   car1.style.left = `${(div2Position.x * 100)}px`;
   car1.style.top = `${(div2Position.y * 100)}px`;
  }

setInterval(() => {
  makeCardDrive()
  collisionX()
  collisionY()
}, 250);




// let xAxisCar1 = 800;
// let xAxisCar2 = 800;
// let xAxisCar3 = 1000;


// function moveCar(){
//   // Mohammed's help of using the transform to move cars
//   div2.style.transform = `translateX(${xAxisCar1}px)`;
//   div3.style.transform = `translateX(${xAxisCar2}px)`;
//   div4.style.transform = `translateX(${xAxisCar3}px)`;
//   // div2.style.left = (parseFloat(div2.style.left) - 10)+"px"
//   // div3.style.left = (parseFloat(div2.style.left) - 5)+"px"
//   // div4.style.left = (parseFloat(div2.style.left) - 10)+"px"
  
 
// }
// Mohammed's help on random function
// function randomFunction(range){
//   return Math.floor(Math.random() * range ) 
// }
///Mohammed helped with getting the cars to loop//

// setInterval(()=>{
//   xAxisCar1-= 4;
//   xAxisCar2-=9;
//   xAxisCar3-=7;
  
  
//   moveCar();
  
// },10)

// setInterval(()=>{
//   xAxisCar1 = 800;
//   xAxisCar2 = 800;
//   xAxisCar3 = 800;
//   // div2.style.left = 900+"px"
//   // div3.style.left = 1000+"px"
//   // div4.style.left = 900+"px"

//   // yAxisCar1 = 500;
//   // yAxisCar2 =400;
//   // yAxisCar3 =300;
//   moveCar();
// },5000)

// collision detection


