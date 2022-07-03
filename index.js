var buttonarr = document.querySelectorAll(".drum");

for(var i =0 ; i < buttonarr.length ; i ++){
  //buttonarr[i].addEventListener("click" , gotclick);
  buttonarr[i].addEventListener("click" , function(){
    this.style.color = "white";
  })
}
function gotclick(){

  this.color = "white";
  //var audio = new Audio('sounds/tom-1.mp3');
  //audio.play();
  //alert("I got clicked");
}
