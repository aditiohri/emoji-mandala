// Symmetry corresponding to the number of reflections. Change the number for different number of reflections
let symmetry = 6;

let angle = 360 / symmetry;
let bgColorButton,
  bgColorPicker,
  saveButton,
  clearButton,
  mouseButton,
  keyboardButton,
  buttonParent,
  slider,
  brushSizeSlider,
  brushColorPicker,
  lineColorPicker,
  emoji;

window.setup = () => {
  createCanvas(window.outerHeight, window.innerHeight - 200);
  angleMode(DEGREES);

  bgColorButton = createButton("Choose Background Color");
  bgColorPicker = createColorPicker("#faf");

  background(bgColorPicker.color());

  // Creating the save button for the file
  saveButton = createButton("save");
  saveButton.mousePressed(saveFile);

  // Creating the clear screen button
  clearButton = createButton("Reset");
  clearButton.mousePressed(clearScreen);

  // Creating the button for Full Screen
  fullscreenButton = createButton("Full Screen");
  fullscreenButton.mousePressed(screenFull);

  // Setting up the slider for the thickness of the brush
  brushSizeSlider = createButton("Brush Size Slider");
  sizeSlider = createSlider(1, 32, 4, 0.1);

  brushColorPicker = createButton("Brush Color Picker");
  lineColorPicker = createColorPicker("#b1b");
};

// Save File Function
function saveFile() {
  save("design.jpg");
}

// Clear Screen function
function clearScreen() {
  background(bgColorPicker.color());
  emoji = ''
}

// Full Screen Function
function screenFull() {
  let fs = fullscreen();
  fullscreen(!fs);
}

window.draw = () => {
  translate(width / 2, height / 2);

  if (mouseX > 0 && mouseX < width && mouseY > 0 && mouseY < height) {
    let mx = mouseX - width / 2;
    let my = mouseY - height / 2;
    let pmx = pmouseX - width / 2;
    let pmy = pmouseY - height / 2;

    if (mouseIsPressed) {
      for (let i = 0; i < symmetry; i++) {
        rotate(angle);
        let sw = sizeSlider.value();
        strokeWeight(sw);
        stroke(lineColorPicker.color());
        line(mx, my, pmx, pmy);
        if (emoji) {
          text(emoji, mx, my);
        }
        push();
        scale(1, -1);
        line(mx, my, pmx, pmy);
        pop();
      }
    }
  }
};
