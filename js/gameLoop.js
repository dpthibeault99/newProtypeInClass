var canvas = document.getElementById("myCanvas");
var context = canvas.getContext("2d");

// time and frames
var interval = 1000/60;
var timer = setInterval(animate,interval);

dot = new gameObject(100,100,50,50, "#ff0000" );






function animate()
{
    context.clearRect(0,0,canvas.width, canvas.height);
    dot.drawCircle();
}