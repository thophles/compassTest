var compassHeading = 0;
var txts = ["Turning eyes inward \n Just to see the masses \n Questioning everything \n Counter hearts depart \n From practice", "Morals have no place in American business \n It's a city of madness \n And merry men's wishes \n Where the ones who did have it \n Are the ones who won't miss it \n Define greatness", "These poetics aren't for you \n But the magic in the hat \n It's the ones with frontal views \n Seeing white when you're black \n So just play the telephone \n Knowing truth is in the back", "Music deafening noise inside me \n As the parent city denies it \n The voice of city washed out \n By the ones who could affort to buy it \n The game's forever running"];

function setup()
{
	createCanvas(window.innerWidth, window.innerHeight, P2D);
}

function draw()
{
  background(255, 210, 10);
  //rotateX(radians(rotationX));
  //rotateY(radians(rotationY));
  fill(50);
  textSize(20)
  textAlign(CENTER)
  translate(width/2, height/2)

  if(compassHeading < 45 || compassHeading > 315)
	{
		  background(255, 200, 10);
  		text(txts[0],0,0)
  }
	else if (compassHeading > 45 && compassHeading < 135)
	{
			background(255, 190, 10);
			text(txts[1], 0, 0)
	}
	else if (compassHeading > 135 && compassHeading < 225)
	{
		  background(255, 180, 10);
			text(txts[2], 0, 0)
	}
	else if (compassHeading > 225 && compassHeading < 315)
	{
			background(255, 170, 10);
			text(txts[3], 0, 0)
	}
	else
	{
  		text(compassHeading,0,0)
  }
}
window.addEventListener('deviceorientation', function(e)
{
  alpha = e.alpha;
  beta = e.beta;
  gamma = e.gamma;
  if (e.webkitCompassHeading)
	{
  	compassHeading = e.webkitCompassHeading;
  }
	else
	{
    compassHeading = alpha;
  }
});
