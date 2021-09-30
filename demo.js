let brushMode = 0;
let slider;
let colorPicker;

function setup() {
  createCanvas(600, 500);
  background(255);
  strokeWeight(0);
  
  
  buttonBrush = createButton('brush');
  buttonBrush.position(0, 0);
  buttonBrush.mousePressed(changeToBrush);
  
  buttonSpray = createButton('spray');
  buttonSpray.position(0, 25);
  buttonSpray.mousePressed(changeToSpray);
  
  slider = createSlider(0, 100, 10);
  slider.position(0, 50);
  slider.style('width', '80px');
  
  colorPicker = createColorPicker('#000000');
  colorPicker.position(0,75);

  buttonSpray = createButton('Save');
  buttonSpray.position(0, 100);
  buttonSpray.mousePressed(saveDrawing);
}

function draw() {
  if(mouseX > 100) {
    fill(colorPicker.value())
    let brushSize = slider.value();
    if(mouseIsPressed) {
      if(brushMode === 0) {
        rect(mouseX-brushSize/2,mouseY-brushSize/2,brushSize,brushSize);
         }
      else {
        circle(mouseX + random(-20,20), mouseY+ random(-20,20), brushSize+ random(0,20));
      }
    }
  }
  fill(200);
  rect(0,0,100,500);
  fill(0);
  rect(95,0,5,500);
}

function changeToBrush() {
  brushMode = 0;
}

function changeToSpray() {
  brushMode = 1;
}

function saveDrawing() {
  get(100,0,500,500).save();
}
