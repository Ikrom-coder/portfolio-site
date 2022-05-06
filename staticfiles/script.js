// 000000000000000000000000000000000000000000000000000000000000000000000 main
var paragraphInit = document.querySelector(".paragraph")
var paragraph = document.querySelector(".parag")
var paragraphOne = document.querySelector(".paragOne")
var paragraphTwo = document.querySelector(".paragTwo")

window.onscroll = function() {myFunction()};

function myFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 100) {
    document.getElementById("navbar").className = "navbar navbar-expand-md bg-dark navbar-dark fixed-top";
  }
  else if (document.body.scrollTop < 30) {
    document.getElementById("navbar").className = "navbar navbar-expand-md navbar-dark";
  }
}

function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

function changeColorRandomly(){
  colorRandom = getRandomColor();
  paragraphInit.style.color = colorRandom;
}
function setDefaultColor(){
  paragraphInit.style.color = 'white';
}
// setInterval(changeColorRandomly(), 1000);

function ChangeColorParag(){
  paragraph.style.color = 'red'
}
function ChangeColorParagNext(){
  paragraph.style.color = 'white'
}
function ChangeColorParagOne(){
  paragraphOne.style.color = '#89E2CD'
}
function ChangeColorParagOneNext(){
  paragraphOne.style.color = 'white'
}
function ChangeColorParagTwo(){
  paragraphTwo.style.color = '#BECD3B'
}
function ChangeColorParagTwoNext() {
  paragraphTwo.style.color = 'white'
}
paragraphInit.addEventListener("mouseover", changeColorRandomly)
paragraphInit.addEventListener("mouseout", setDefaultColor)
paragraph.addEventListener("mouseover", ChangeColorParag)
paragraph.addEventListener("mouseout", ChangeColorParagNext)
paragraphOne.addEventListener("mouseover", ChangeColorParagOne)
paragraphOne.addEventListener("mouseout", ChangeColorParagOneNext)
paragraphTwo.addEventListener("mouseover", ChangeColorParagTwo)
paragraphTwo.addEventListener("mouseout", ChangeColorParagTwoNext)

// 0000000000000000000000000000000000000000000000000000000000000 main ends
