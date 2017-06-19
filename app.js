'use strict';

//array for all images
var allImages =  [];

//object constructor
function Image(name, filepath) {
  this.name = name;
  this.filepath = filepath;
  this.shown = 0;
  this.clicked = 0;
  allImages.push(this);
}

//object instances
var bag = new Image('bag', 'img/bag.jpg.webloc');
var banana = new Image('banana', 'img/banana.jpg.webloc');
var bathroom = new Image('bathroom', 'img/bathroom.jpg.webloc');
var boots = new Image('boots', 'img/boots.jpg.webloc');
var breakfast = new Image('breakfast', 'img/breakfast.jpg.webloc');
var bubblegum = new Image('bugglegum', 'img/bubblegum.jpg.webloc');
var chair = new Image('chair', 'img/chair.jpg.webloc');
var cthulhu = new Image('cthulhu', 'img/cthulhu.jpg.webloc');
var dogDuck = new Image('dogDuck', 'img/dog-duck.jpg.webloc');
var dragon = new Image('dragon', 'img/dragon.jpg.webloc');
var pen = new Image('pen', 'img/pen.jpg.webloc');
var petSweep = new Image('petSweep', 'img/pet-sweep.jpg.webloc');
var scissors = new Image('scissors', 'img/scissors.jpg.webloc');
var shark = new Image('shark', 'img/shark.jpg.webloc');
var sweep = new Image('sweep', 'img/sweep.jpg.webloc');
var tauntaun = new Image('tauntaun', 'img/tauntaun.jpg.webloc');
var unicorn = new Image('unicorn', 'img/unicorn.jpg.webloc');
var usb = new Image('usb', 'img/usb.jpg.webloc');
var waterCan = new Image('waterCan', 'img/water-can.jpg.webloc');
var wineGlass = new Image('wineGlass', 'img/wine-glass.jpg.webloc');
