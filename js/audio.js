console.log("start audio.js");

function play(){
var audio;
audio = document.querySelector("audio");

audio.play();
}

function pause(){
var audio;
audio = document.querySelector("audio");

audio.pause();
}

function skip10sec(){
var audio;
audio = document.querySelector("audio");

audiocurrentTime = audiocurrentTime + 10
}

function play(event){
  var player = document.querySelector("audio");
  console.log("play");
  player.play();
}

var playButton = document.querySelector("[data-role=play]");
playButton.addEventListener("click", play);

function pause(event){
  var player = document.querySelector("audio");
  console.log("play");
  player.pause();
}

var pauseButton = document.querySelector("[data-role=pause]");
pauseButton.addEventListener("click", pause);