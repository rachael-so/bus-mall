'use strict';

//global vars
var allImages =  [];
var index = [];
var container = document.getElementById('select');

//object constructor
function Image(name, filepath) {
  this.name = name;
  this.filepath = filepath;
  this.shown = 0;
  this.clicked = 0;
  allImages.push(this);
}

//object instances
var bag = new Image('bag', 'img/bag.jpg');
var banana = new Image('banana', 'img/banana.jpg');
var bathroom = new Image('bathroom', 'img/bathroom.jpg');
var boots = new Image('boots', 'img/boots.jpg');
var breakfast = new Image('breakfast', 'img/breakfast.jpg');
var bubblegum = new Image('bugglegum', 'img/bubblegum.jpg');
var chair = new Image('chair', 'img/chair.jpg');
var cthulhu = new Image('cthulhu', 'img/cthulhu.jpg');
var dogDuck = new Image('dogDuck', 'img/dog-duck.jpg');
var dragon = new Image('dragon', 'img/dragon.jpg');
var pen = new Image('pen', 'img/pen.jpg');
var petSweep = new Image('petSweep', 'img/pet-sweep.jpg');
var scissors = new Image('scissors', 'img/scissors.jpg');
var shark = new Image('shark', 'img/shark.jpg');
var sweep = new Image('sweep', 'img/sweep.png');
var tauntaun = new Image('tauntaun', 'img/tauntaun.jpg');
var unicorn = new Image('unicorn', 'img/unicorn.jpg');
var usb = new Image('usb', 'img/usb.gif');
var waterCan = new Image('waterCan', 'img/water-can.jpg');
var wineGlass = new Image('wineGlass', 'img/wine-glass.jpg');

function displayImg(index) {
  var img1 = document.createElement('IMG');
  img1.setAttribute('src', allImages[index].filepath);
  img1.setAttribute('width', '304');
  img1.setAttribute('height', '228');
  img1.setAttribute('id', allImages[index].name);
  container.appendChild(img1);

  allImages[index].shown += 1;
}

function chooseIndex() {
  var i = Math.floor(Math.random() * 20);
  var j = Math.floor(Math.random() * 20);
  var k = Math.floor(Math.random() * 20);

  do {
    var i = Math.floor(Math.random() * 20);
  } while (index.includes(i) || i === j || i === k);
  do {
    j = Math.floor(Math.random() * 20);
  } while(index.includes(j) || j === i || j === k);
  do {
    k = Math.floor(Math.random() * 20);
  } while (index.includes(k) || k === i || k === j);

  index[0] = i;
  index[1] = j;
  index[2] = k;
}

function displayAll() {
  chooseIndex();
  displayImg(index[0]);
  displayImg(index[1]);
  displayImg(index[2]);
}

displayAll();

container.addEventListener('click', handleClick);

function handleClick() {
  for (var i = 0; i < allImages.length; i++) {
    if (allImages[i].name === event.target.id) {
      // console.log(i);
      allImages[i].clicked += 1;
      container.innerHTML = '';
      displayAll();
    }
  }
}
