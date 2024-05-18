//Variablen
const ursprung = {
  x: 75,
  y: 500,
};
const anzahlPunkte = {
  x: 10,
  y: 4,
};
const laengeX = 850;
const laengeY = 450;

// +1 So we can have space between last number and Arrow
let xLE = laengeX / (anzahlPunkte.x + 1);
let yLE = laengeY / (anzahlPunkte.y + 1);

//Offset
let offset = {
  x: 0,
  y: 0
}
let changedOffset = offset;

//Function Accuracy
const drawStart = -1*xLE;
let step = 0.1;
