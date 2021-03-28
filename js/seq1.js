//create a synth and connect it to the main output (your speakers)
//const synth = new Tone.Synth().toDestination();

//play a middle 'C' for the duration of an 8th note
//synth.triggerAttackRelease("C4", "8n");



//var slider = document.getElementById('s1');

//console.log(slider.value);

let table;

let slider;

let sliderBHS, sliderBLZ, sliderCRI, sliderCUB, sliderDOM, sliderGTM, sliderHND, sliderHTI, sliderJAM, sliderMEX, sliderNIC, sliderPAN, sliderSLV, sliderPRI;

// let doms1;

let mySound;

let sound0, sound1, sound2, sound3, sound4, sound5, sound6, sound7, sound8, sound9, sound10, sound11, sound12, sound13

/////////////////

// var counterString = createVector(0, 16, 15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1);

var counterString = [
  "0", "16", "15", "14", "13", "12", "11", "10", "9", "8", "7", "6", "5", "4", "3", "2", "1"
];

let indexC1 = counterString.length;
let indexC2 = counterString.length;

let counter;

//time in milliseconds to be reached
let bpm = 20;

let expr = (60000 / bpm) / 4; //transform bpm to ms

let c1 = expr;
let c2 = expr;

//////////////

function preload() {
  table = loadTable('assets/usuarios-internet.csv', 'csv', 'header');

  //soundFormats('mp3', 'ogg', 'wav');
  //mySound = loadSound('assets/005-bassIce-G.wav');

  //sound0 = loadSound('assets/osciladores2019-fábrica.mp3');
  sound1 = loadSound('assets/chupón-bip.mp3');
  sound2 = loadSound('assets/osciladores2019-fábrica.mp3');
}

function setup() {

  let cnv = createCanvas(100, 100);
  cnv.position(0, 0);

  print(table.getRowCount() + ' total rows in table');
  print(table.getColumnCount() + ' total columns in table');

  //print(table.getColumn('time'));

  //slider = createSlider(2, table.getColumnCount() - 1, 1);
  //slider.position(100, 180);
  //slider.style('width', '80px');

  sound1.loop();
  sound2.loop();
  sound2.setVolume(0.1);
}

function draw() {
  //let val = slider.value();

  let x1 = windowWidth / 2;
  let y1 = 0;
  let x2 = mouseX;
  let y2 = mouseY;

  let d = dist(x1, y1, x2, y2);

  print(d);

  let md = map(d, 0, 1200, 0.3, 0);

  let p = map(mouseX, 0, windowWidth, -1, 1);
  //let pwinY = map(pwinMouseY, 0, 1200, 0, 0.7);

  sound1.setVolume(md);
  sound2.setVolume(md);

  sound2.pan(p);

  // background(val);

  //slider.changed(updateText); <------------

  //doms1 = document.getElementById('s1').value;

  /*does not work
  //doms1.input(print('hey!'));*/

  //if (doms1 == 3) {
  //updateText();
  //}

  //print(doms1);
  //doms1.changed(updateText);

  //setBPM(val);

  /*
    let m = millis();

    let bpm1 = table.getString(1, slider.value());
    //let c = expr;
    let expr1 = (60000 / bpm1) / 2; //transform bpm to ms
    if (m >= c1) {
      //rest 1 to indexC whenever m is greater than c
      c1 = c1 + expr1; //sum expr to c so m is lower than c again
      indexC1 = indexC1 - 1;
      print("indexC1: " + indexC1);
      //draw a yellow ellipse when indexC equals on 16, 12, 8 or 4
      if ((indexC1 == 1) || (indexC1 == 2) || (indexC1 == 13) || (indexC1 == 16)) {
        sound1.play();
      }
    }
    //assign counter.lenght to indexC
    if (indexC1 == 1) {
      indexC1 = int(counterString.length);
    }

    /////////////

    let bpm2 = table.getString(2, slider.value());
    //let c = expr;
    let expr2 = (60000 / bpm2) / 2; //transform bpm to ms
    if (m >= c2) {
      //rest 1 to indexC whenever m is greater than c
      c2 = c2 + expr2; //sum expr to c so m is lower than c again
      indexC2 = indexC2 - 1;
      print("indexC2: " + indexC2);
      //draw a yellow ellipse when indexC equals on 16, 12, 8 or 4
      if ((indexC2 == 1) || (indexC2 == 2) || (indexC2 == 13) || (indexC2 == 16)) {
        mySound.play();
      }
    }
    //assign counter.lenght to indexC
    if (indexC2 == 1) {
      indexC2 = int(counterString.length);
    }*/

}

function updateText() {
  //print(table.getString(2, slider.value()));
  //document.write(table.getString(slider.value(), 0));<---- not
  //let a = select('#p1');
  //a.html("CUB: " + table.getString(2, slider.value()));
}