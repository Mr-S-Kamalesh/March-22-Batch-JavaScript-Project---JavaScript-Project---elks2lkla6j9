
const generate = document.querySelector('#button');
const clearbtn = document.querySelector('#clear')
const input = document.querySelector('input');
function PolyGen(sides,canvas,context,radius,thickness,color,x,y) {
	sides = sides || 3; // sides
	if (!canvas && !context) return; // canvas
	if (!context) context = canvas.getContext("2d"); // context
	if (!radius) radius = Math.min(canvas.width, canvas.height) / 2; // radius
	context.lineWidth = thickness || 8; // thickness
	context.strokeStyle = color || "#2a2a2a"; // color
	if (!x) x =  canvas.width / 2; // x
	if (!y) y = canvas.height / 2; // y
	
	context.beginPath();
	context.moveTo(x +  radius * Math.cos(0), y +  radius *  Math.sin(0));          
	for (i = 1; i <= sides + 1; i++) context.lineTo(x + radius * Math.cos(i * 2 * Math.PI / sides), y + radius * Math.sin(i * 2 * Math.PI / sides));
  
  context.fill();
	context.stroke();
}
function create(){
  const side = Number(document.getElementById('sides').value);
  var fillcolor = randomRGB();
  PolyGen(side,document.querySelector("canvas"), 0, 1000, 8,String(fillcolor), 0, 0);
}
function clear(){
  location.reload();
}
function random(min, max) {
  const num = Math.floor(Math.random() * (max - min + 1)) + min;
  return num;
}
function randomRGB() {
  return `rgb(${random(0, 255)},${random(0, 255)},${random(0, 255)})`;
}
clearbtn.onclick = clear;
generate.onclick = create;







