var colors = [[204, 167, 255], [204, 245, 232], [54, 217, 178], [54, 217, 239], [54, 146, 239], [219, 146, 239], [255, 147, 121]];
var color = colors[Math.floor(Math.random() * colors.length)];
document.getElementById("randomBackground").style = "background: rgb(" + color[0] + "," + color[1] + "," + color[2] + ")" ;