
# 2d_Math_Renderer

<p align="center"><img src="https://socialify.git.ci/bekirtahagd/2d_math_renderer/image?font=Bitter&amp;language=1&amp;name=1&amp;owner=1&amp;pattern=Charlie%20Brown&amp;theme=Dark" alt="project-image"></p>
Demo: https://bekirtahagd.github.io/2d_math_renderer/ <br>


<br>Ein 2d Renderer, welcher in der Lage ist mathematische Funktionen darzustellen. Dabei kann man verschiedene trigonometrische aber auch Polynomomfunktionen erstellen.





## Screenshots

![App Screenshot](https://github.com/bekirtahagd/2d_math_renderer-main/blob/main/preview/function-preview.png)
![App Screenshot](https://github.com/bekirtahagd/2d_math_renderer-main/blob/main/preview/function-preview-2.png)
![App Screenshot](https://github.com/bekirtahagd/2d_math_renderer-main/blob/main/preview/function-preview-3.png)
![App Screenshot](https://github.com/bekirtahagd/2d_math_renderer-main/blob/main/preview/function-preview-4.png)



## Features

- Trigonometrische Funktionen
    - Sinus
    - Cosinus
- Polynomfunktionen
    - linear
    - quadratisch
    - Kubische
    - quartische
- Animationen auf der X-Achse
- Anzahl der Punkte auf Koordinatensystem Responsiv
- Achsen verschiebbar

## Funktionsweise

Zur Darstellung wurde ein HTML Canvas Element erstellt. Dabei wird zuerst das Koordinatensystem gezeichnet. Die Länge der Achsen bleibt immer gleich. Verändert man die Anzahl der Punkte auf einer Achse, so wird eine Längeneinheit durch die Formel

```bash
  Längeneinheit = Länge der Achse / Anzahl der Punkte 
```
berechnet. Um die einzelnen Funktionen berechnen zu können, müssen wir für jeden x-Wert einen y-Wert berechnen. Dabei entsteht jedoch ein Problem. Da 1LE nicht gleich einem Pixel entsprechen müssen wir unsere Rechnung auf die Pixellängen anpassen. So entsteht zum Beispiel aus der einfachen Formel

```bash
  y = mx+b
```
die abgeänderte von der durch das Programm gegebenen Längeneinheit abhängige Funktionen

```bash
  y = (m * ((x + xLE) / xLE)  + b) * yLE
```
Dieser Prozess musste nun für jede einzelne Funktion erstellt werden. Die Quartische Funktion (inklusive Offset Einstellung) sieht dabei wie folgt aus:

```bash
  y = a * (((x + xLE) / xLE)^4) + b * (((x + xLE) / xLE)^3)+ c * (((x + xLE) / xLE)^2) + d* ((x + xLE) / xLE) + e;
```
