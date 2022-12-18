var arr= document.querySelectorAll(".drum");
var dict ={
    j:"crash.mp3",
    k:'kick-bass.mp3',
    l:'snare.mp3',
    w:"tom-1.mp3",
    a:"tom-2.mp3",
    s:"tom-3.mp3",
    d:"tom-4.mp3",
}
for(var i=0;i<arr.length;i++){
    arr[i].addEventListener("click",handleClick);
}
function playSound(url){
    var audio  = new Audio("sounds/"+dict[url]);
    audio.play();
}
function handleClick(event){
   
    var key = this.textContent;
    playSound(key);
    buttonAnimation(key);
    // var audio = new Audio('sounds/tom-1.mp3');

    // audio.play();
}
document.addEventListener("keydown",(event)=>{
    playSound(event.key);
    buttonAnimation(event.key);
})
function buttonAnimation(currentKey){
   var active= document.querySelector(`.${currentKey}`);
   active.classList.add("pressed");
   setTimeout(()=>{
    active.classList.remove("pressed");

   },100);
}