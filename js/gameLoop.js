var canvas = document.getElementById("myCanvas");
var context = canvas.getContext("2d");

// time and frames
var interval = 1000/60;
var timer = setInterval(animate,interval);


player = new gameObject();
player.force = 1;

follower = new gameObject();
follower.x =20;
follower.y = 20;
follower.color = "#ff0000";



function animate()
{
    context.clearRect(0,0,canvas.width, canvas.height);
   
    angularMovement();
    player.drawTriangle();
    follower.drawTriangle();

}
function angularMovement()
{ 
    follower.angle +=2; // infinate spins

    if (w)
    {
        var radians = player.angle + Math.PI / 180;

        player.ax = Math.cos(radians);
        player.ay = Math.sin(radians);

        player.vx += player.ax * player.force;
        player.vy += player.ay * player.force;
    }

    if (s)
    {
        var radians = player.angle + Math.PI / 180;

        player.ax = Math.cos(radians);
        player.ay = Math.sin(radians);

        player.vx += player.ax * -player.force;
        player.vy += player.ay * -player.force;
    }


    if(a)
    {
        player.angle -=2;
    }
    if(d)
    {
        player.angle +=2;
    }

    player.move();
}