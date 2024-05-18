function drawCoordinateSystem( {showNumbers, offset} ) {
  //X-Achse
  const xAchse = ursprung.x + laengeX;

  drawAxis(
    {
      start: {
        x: ursprung.x,
        y: ursprung.y,
      },
      end: {
        x: xAchse,
        y: ursprung.y,
      },
      name: "x",
    },
    showNumbers.x,
    offset.x
  );

  //Y-Achse
  const yAchse = ursprung.y - laengeY;

  drawAxis(
    {
      start: {
        x: ursprung.x,
        y: ursprung.y,
      },
      end: {
        x: ursprung.x,
        y: yAchse,
      },
      name: "y",
    },
    showNumbers.y,
    offset.y
  );
}

function drawAxis(axis, drawNumbers = true, offset) {
  console.log(offset)
  //Variables
  const pdng = 5;

  //Draw Line
  c.beginPath();
  c.moveTo(axis.start.x, axis.start.y);
  c.lineTo(axis.end.x, axis.end.y);
  c.fillText(axis.name + "-Achse", axis.end.x + pdng, axis.end.y);
  c.stroke();

  //Draw Axis Arrow
  let p1;
  let p2;

  if (axis.name === "x") {
    p1 = {
      x: axis.end.x - pdng,
      y: axis.end.y - pdng,
    };
    p2 = {
      x: axis.end.x - pdng,
      y: axis.end.y + pdng,
    };
  } else {
    p1 = {
      x: axis.end.x - pdng,
      y: axis.end.y + pdng,
    };
    p2 = {
      x: axis.end.x + pdng,
      y: axis.end.y + pdng,
    };
  }

  c.beginPath();
  c.moveTo(p1.x, p1.y);
  c.lineTo(axis.end.x, axis.end.y);
  c.lineTo(p2.x, p2.y);
  c.stroke();

  //Draw numbers
  if (drawNumbers) {
    //Loop for every LE
    c.beginPath();
    c.fillStyle = 'black';

    if (axis.name === "x") {
      for (let i = 1; i <= anzahlPunkte.x; i++) {
        const x = ursprung.x + i * xLE();
        c.moveTo(x, ursprung.y + pdng);
        c.lineTo(x, ursprung.y - pdng);
        c.fillText((i+offset), x - 3, ursprung.y + 25);
      }
    } else {
      for (let i = 1 ; i <= anzahlPunkte.y; i++) {
        const y = ursprung.y - i * yLE();
        c.moveTo(ursprung.x - pdng, y);
        c.lineTo(ursprung.x + pdng, y);
        c.fillText((i+offset), ursprung.x - 20, y + 5); // Remove text a bit so it looks a bit better
      }
    }
    c.stroke();
  }
}

function drawSineFunction({
  ursprung,
  func,
  start = 0,
  end,
  step = 1,
  color = "black",
}) {
  //Calculate Results
  for (let x = start + step; x < end; x += step) {
    let modX = ((x + changedOffset.x * xLE()) / xLE());
    let res = func.a * Math.sin(func.b * (modX - func.c)) + func.d;
    let p = res * yLE() - changedOffset.y * yLE();
    c.fillStyle = color;
    c.fillRect(ursprung.x + x, ursprung.y - p, 1, 1);
  }
}

function drawCosFunction({
  ursprung,
  func,
  start = 0,
  end,
  step = 1,
  color = "black",
}) {
  //Calculate Results
  for (let x = start + step; x < end; x += step) {
    let modX = ((x + changedOffset.x * xLE()) / xLE());
    let res = func.a * Math.cos(func.b * (modX - func.c)) + func.d;
    let p = res * yLE() - changedOffset.y * yLE();
    c.fillStyle = color;
    c.fillRect(ursprung.x + x, ursprung.y - p, 1, 1);
  }
}

function drawLinearFunction({
  ursprung,
  func,
  start = 0,
  end,
  step = 1,
  color = "black",
}) {
  //Calculate Results
  for (let x = start + step; x < end; x += step) {
    let modX = ((x + changedOffset.x * xLE()) / xLE());
    let res = func.m * modX + func.b;
    let p = res * yLE() - changedOffset.y * yLE();
    c.fillStyle = color;
    c.fillRect(ursprung.x + x, ursprung.y - p, 1, 1);
  }
}

function drawQuadraticFunction({
  ursprung,
  func,
  start = 0,
  end,
  step = 1,
  color = "black",
}) {
  //Calculate Results
  for (let x = start + step; x < end; x += step) {
    let modX = ((x + changedOffset.x * xLE()) / xLE())
    let res = func.a * (modX**2) + func.b * modX + func.c;
    let p = res * yLE() - changedOffset.y * yLE();
    c.fillStyle = color;
    c.fillRect(ursprung.x + x, ursprung.y - p, 1, 1);
  }
}

function drawCubicFunction({
  ursprung,
  func,
  start = 0,
  end,
  step = 1,
  color = "black",
}) {
  //Calculate Results
  for (let x = start + step; x < end; x += step) {
    let modX = ((x + changedOffset.x * xLE()) / xLE());
    let res = func.a * (modX**3) + func.b * (modX**2)+ func.c * modX + func.d;
    let p = res * yLE() - changedOffset.y * yLE();
    c.fillStyle = color;
    c.fillRect(ursprung.x + x, ursprung.y - p, 1, 1);
  }
}

function drawQuarticFunction({
  ursprung,
  func,
  start = 0,
  end,
  step = 1,
  color = "black",
}) {
  //Calculate Results
  for (let x = start + step; x < end; x += step) {
    let modX = ((x + changedOffset.x * xLE()) / xLE());
    let res = func.a * (modX**4) + func.b * (modX**3)+ func.c * (modX**2) + func.d* modX * func.e;
    let p = res * yLE() - changedOffset.y * yLE();
    c.fillStyle = color;
    c.fillRect(ursprung.x + x, ursprung.y - p, 1, 1);
    console.log(res);
  }
}