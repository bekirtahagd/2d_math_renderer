const canvas = document.querySelector("canvas");
const c = canvas.getContext("2d");

//Hintergrund und Basics
c.strokeRect(0, 0, canvas.width, canvas.height);
c.font = "14px serif";

//Animation
let animTimer;
function animation(delay) {
  draw();

  changedOffset.x += 0.5;
  animTimer = setTimeout(() => {
    animation(delay);
  }, delay);
}

//Beginning
drawCoordinateSystem({
  showNumbers: {
    x: true,
    y: true,
  },
  offset: changedOffset,
});

//Event Listener
document.querySelector("#drawFunc").addEventListener("click", (e) => {
  clearTimeout(animTimer);
  changedOffset.x = changedOffset.x;

  //Set offset
  offset.x = Number(document.querySelector("#xOffset").value);
  offset.y = Number(document.querySelector("#yOffset").value);

  //Amount of poiints
  anzahlPunkte.x = Number(document.querySelector("#xAnzahlPunkte").value);
  anzahlPunkte.y = Number(document.querySelector("#yAnzahlPunkte").value);

  //Animation
  let checkbox = document.querySelector("#animate").checked;
  if (checkbox) {
    let delay = document.querySelector("#delay").value;
    animation(delay);
  } else {
    draw();
  }
});

//Drawing
function draw() {
  c.clearRect(0, 0, canvas.width, canvas.height);

  //Koordinatensystem
  drawCoordinateSystem({
    showNumbers: {
      x: true,
      y: true,
    },
    offset: changedOffset,
  });

  //Functions
  funcs.forEach((func) => {
    let type = func.getAttribute("type");

    switch (type) {
      case "sin":
        drawSine(func);
        break;
      case "cos":
        drawCos(func);
        break;
      case "linear":
        drawLinear(func);
        break;
      case "quadratic":
        drawQuadratic(func);
        break;
      case "cubic":
        drawCubic(func);
        break;
      case "quartic":
        drawQuartic(func);
        break;
    }
  });

}


// Draw Functions dependent from input
function drawSine(func) {
  let a = Number(func.querySelector(".sin").querySelector(".a").value);
  let b = Number(func.querySelector(".sin").querySelector(".b").value);
  let c = Number(func.querySelector(".sin").querySelector(".c").value);
  let d = Number(func.querySelector(".sin").querySelector(".d").value);
  drawSineFunction({
    ursprung: ursprung,
    func: {
      a: a,
      b: b,
      c: c,
      d: d,
    },
    start: drawStart,
    end: laengeX,
    step: step,
    color: "red"
  });
}
function drawCos(func) {
  let a = Number(func.querySelector(".cos").querySelector(".a").value);
  let b = Number(func.querySelector(".cos").querySelector(".b").value);
  let c = Number(func.querySelector(".cos").querySelector(".c").value);
  let d = Number(func.querySelector(".cos").querySelector(".d").value);
  drawCosFunction({
    ursprung: ursprung,
    func: {
      a: a,
      b: b,
      c: c,
      d: d,
    },
    start: drawStart,
    end: laengeX,
    step: step,
    color: "green"
  });
}
function drawLinear(func) {
  let m = Number(func.querySelector(".linear").querySelector(".m").value);
  let b = Number(func.querySelector(".linear").querySelector(".b").value);
  drawLinearFunction({
    ursprung: ursprung,
    func: {
      m: m,
      b: b,
    },
    start: drawStart,
    end: laengeX,
    step: step,
    color: "blue"
  });
}
function drawQuadratic(func) {
  let a = Number(func.querySelector(".quadratic").querySelector(".a").value);
  let b = Number(func.querySelector(".quadratic").querySelector(".b").value);
  let c = Number(func.querySelector(".quadratic").querySelector(".c").value);
  drawQuadraticFunction({
    ursprung: ursprung,
    func: {
      a: a,
      b: b,
      c: c,
    },
    start: drawStart,
    end: laengeX,
    step: step,
    color: "purple"
  });
}
function drawCubic(func) {
  let a = Number(func.querySelector(".cubic").querySelector(".a").value);
  let b = Number(func.querySelector(".cubic").querySelector(".b").value);
  let c = Number(func.querySelector(".cubic").querySelector(".c").value);
  let d = Number(func.querySelector(".cubic").querySelector(".d").value);
  drawCubicFunction({
    ursprung: ursprung,
    func: {
      a: a,
      b: b,
      c: c,
      d: d,
    },
    start: drawStart,
    end: laengeX,
    step: step,
    color: "orange"
  });
}

function drawQuartic(func) {
  let a = Number(func.querySelector(".quartic").querySelector(".a").value);
  let b = Number(func.querySelector(".quartic").querySelector(".b").value);
  let c = Number(func.querySelector(".quartic").querySelector(".c").value);
  let d = Number(func.querySelector(".quartic").querySelector(".d").value);
  let e = Number(func.querySelector(".quartic").querySelector(".e").value);
  drawQuarticFunction({
    ursprung: ursprung,
    func: {
      a: a,
      b: b,
      c: c,
      d: d,
      e: e
    },
    start: drawStart,
    end: laengeX,
    step: step,
    color: "yellow"
  });
}