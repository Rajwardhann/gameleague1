


var gamestate = "normalplay"
var blackcar;
var fullsound;
var arenat = 0;
function preload(){
	bg2img = loadImage("Images/city.png")
	bgimg = loadImage("Images/_Example.png");
	vickystableDown = loadAnimation("Images/vidown2.png")
	vickystableRight = loadAnimation("Images/viright2.png")
	vickystableLeft = loadAnimation("Images/vileft2.png")
	vickystableup = loadAnimation("Images/viup2.png")
	vickyrightimg = loadAnimation("Images/viright1.png","Images/viright2.png","Images/viright3.png")
	vickyleftimg = loadAnimation("Images/vileft1.png","Images/vileft2.png","Images/vileft3.png")
	vickydownimg = loadAnimation("Images/vidown1.png","Images/vidown2.png","Images/vidown3.png")
	vickyupimg = loadAnimation("Images/viup1.png","Images/viup2.png","Images/viup3.png")
	lesterdownimg = loadImage("Images/lesterd.png");
	lesterrightimg = loadImage("Images/lesterr.png");
	blackcarimg = loadImage("Images/car.png");
	laptopimg = loadImage("Images/laptop.png");
	vipimg = loadImage("Images/vip.png");
	deadbodyimg = loadImage("Images/deadbody.png");
	houseimg = loadImage("Images/house.png");
	simeonimg = loadImage("Images/simeon.png");
	arenaimg = loadImage("Images/road.png");
	car1img = loadImage("Images/orangecar.png")
	car2img = loadImage("Images/Audi.png");
	car3img = loadImage("Images/supercar.png");
	textboximg = loadImage("Images/textbox.png")
	//fullsound = loadSound("sound/fullsound.mp3");
	//birdsound = loadSound("sound/bird.mp3");
}
function setup(){
	var canvas = createCanvas(600,400);
	

	bg = createSprite(2265,850,1200,600);
	bg.addImage(bgimg);
	bg.scale = 4;

	bg2 = createSprite(185,10,400,600)
	bg2.addImage(bg2img);
	bg2.scale = 1.5;

	blackcar = createSprite(2280,1000,60,30);
	blackcar.addImage(blackcarimg);
	blackcar.scale = 1.3;
	blackcar.visible = false;
	//blackcar.debug = true;

	
	housemission2 = createSprite(1230,-220,50,50);
	housemission2.addImage(houseimg);
	housemission2.scale = 2;
	

	arena = createSprite(200,1500,600,600);
	arena.addImage(arenaimg);
	arena.scale = 2;

	car1 = createSprite(15,1700,50,50);
	car1.addImage(car1img);

	car2 = createSprite(210,1700,50,50);
	car2.addImage(car2img);
	car2.debug = true;
	car2.setCollider("rectangle",0,0,70,220)

	car3 = createSprite(430,1700,50,50);
	car3.addImage(car3img);
	
	
	

	vicky = createSprite(300,210,50,50);
	vicky.addAnimation("stillu",vickystableup);
	vicky.addAnimation("stilll",vickystableLeft);
	vicky.addAnimation("stillr",vickystableRight);
	vicky.addAnimation("stilld",vickystableDown);
	vicky.addAnimation("rightl",vickyrightimg);
	vicky.addAnimation("leftl",vickyleftimg);
	vicky.addAnimation("downl",vickydownimg);
	vicky.addAnimation("upl",vickyupimg);
	vicky.scale = 0.7;

	lester = createSprite(1,10,40,40);
	lester.addImage(lesterdownimg);
	lester.scale = 0.7;

	simeon = createSprite(1230,5,20,20);
	simeon.addImage(simeonimg);
	simeon.scale = 0.4;
	
	laptop = createSprite(550,380,60,30);
	laptop.addImage(laptopimg);
	laptop.scale = 0.4;
	laptop.visible = false;

	vip = createSprite(2800,775,30,30);
	vip.addImage(vipimg);
	vip.scale = 1.2;

	invg = createSprite(2800,1100,40,20);
	invg.visible = false;


	textbox = createSprite(130,330,80,40);
	textbox.addImage(textboximg);
	textbox.scale = 0.7
	textbox.visible = false;
	

}

function draw(){
	
	background("green");
	drawSprites();

	
	
	
	if(gamestate==="normalplay")
	{
		keyPressed();
		if(vicky.isTouching(lester))
		{
			gamestate = "mission1";
		
		}
	}

	if(gamestate==="mission1")
	{
		keyPressed();
		
		vicky.bounceOff(lester);
			
		textbox.visible = true;
		fill("black");
		text("Vicky : Hey are you Lester?",30,260)
		text("Lester : Yeah! My boy,but who are you?",30,290);
		text("Vicky : I am Vicky Grover, I came to know", 30,320);
		text("that you need a professional hacker",70,335);
		text("Lester : Oh really, are you a pro,hmm.. boy",30,355);
		text("I have to test you.", 70,370);
		text("Vicky : Ok then, I am ready.",30,390);
		text("Press Enter to continue",300,380)
		if(keyDown("enter"))
		{
			gamestate = "dialoguecont";

		}
	}
	
	if(gamestate === "dialoguecont")
	{
		fill("black");
		text("Lester : Now here's the work,go to gallet city",30,260);
		text("a Kilometer ahead, there will be",70,275);
		text("a black car, it's hackable.hack it",70,290);
		text("you will have all the controls in your",70,305);
		text("laptop, accelerate the car and kill",70,320);
		text("the VIP.",70,335);
		text("Vicky : What? a murder?",30,355);
		text("Lester : Yeah! only if you want my job",30,375)
		text("Vicky : Ok I will do.",30,395);
		text("Press F to continue",300,380)
		if(keyDown("f"))
		{
			textbox.visible = false;
			gamestate = "mission1start";
		}
	}
	if(gamestate === "mission1start")
	{
		vicky.bounceOff(blackcar);
	    blackcar.visible = true;
		keyPressed();
		fill("yellow")
		text("mission1 started",2,10);
		if(vicky.isTouching(blackcar))
		{
			gamestate = "hackmode";
		}
		
	}

	if(gamestate === "hackmode")
	{
		keyPressed();
		fill("yellow");
		textSize(20);
		text("Press E to to open laptop",230,360);

		if(keyDown("e"))
		{
			gamestate = "hackon";
		}
	}

	if(gamestate === "hackon")
	{
		laptop.visible = true;
		fill("green");
		textSize(10);
		text("Available devices",450,350)
		text("Hack Black Car - Press enter",450,380);

		if(keyDown("enter"))
		{
			gamestate = "hackclose";
		}
	}

	if(gamestate === "hackclose")
	{
		fill("yellow")
		laptop.visible = false;
		textSize(10);
		 text("Car hacked!! ,Now control it and kill the VIP",200,370);
///// 
		

		keyPressedcar();

		vip.velocityY = 3;
		if(vip.isTouching(invg))
		{
			vip.velocityY = 0;
		}

		if(blackcar.isTouching(vip))
		{
			vip.addImage(deadbodyimg);
			vip.scale = 0.3;
			if(frameCount%80 === 0)
			{
				gamestate = "mission1 completed";
			}
		}

		
	}
	
	if(gamestate === "mission1 completed")
	{

		
		keyPressed();
		vicky.x =width/2;
		vicky.y = height/2;
		blackcar.visible = false;
		vip.visible = false;
		fill("blue");
		text("Go back to lester",400,380);
	
		if(vicky.isTouching(lester))
		{
			//gamestate = "mission1over";
			textbox.visible = true;
			fill("black");
			text("Vicky : Hey! I did it",30,260);
			text("Lester : Did anyone caught you?",30,280);
			text("Vicky : Probably not.",30,300);
			text("Lester : Now police will think that it's an",30,320);
			text("accident,very good now you will work for me.",60,335);
			text("Vicky : I want something in return.",30,355);
			text("Lester : Take these 1 million dollars and",30,375);
			text("enjoy ,see you again.",70,390);
			text("Press F to continue",300,380);
			if(keyDown("f"))
			{
				textbox.visible = false;
				gamestate = "mission1over";
			}
		}
	}
	
	if(gamestate === "mission1over")
	{
		keyPressed();
		fill("yellow");
		text("well done press E to continue",2,10)
		if(keyDown("e"))
		{
			gamestate = "normalplay2"
		}
	}

	if(gamestate === "normalplay2")
	{
		keyPressed();
		text("For next mission meet Lester",2,10);
		vicky.x = 300;
		vicky.y = 220;
		if(vicky.isTouching(lester))
		{
			
			fill("yellow");
			text("this is mission2",2,10);
			if(frameCount%80 === 0)
			{
				gamestate = "mission2started";
			}
		}
	}

	if(gamestate === "mission2started")
	{
		keyPressed();
		fill("yellow");
		text("mission2 started",2,10)
		if(vicky.isTouching(simeon))
		{
			gamestate = "mission2main";
		}
	}

	if(gamestate === "mission2main")
	{
		keyPressed();
		textbox.visible = true;
		fill("black");
		text("Vicky : Hey Simeon!",30,260);
		text("Simeon : Who are you?",30,280);
		text("Vicky : Vicky, lester told me to meet you.",30,300);
		text("Simeon : Oh lester my friend.So you should",30,320);
		text("be a hacker,right?",60,335);
		text("Vicky : Yes.",30,355);
		text("Simeon : Okay let's come to the point",30,375);
		text("there's a car race organised in Arena",60,390);
		
		text("Press E to continue",300,380);
		if(keyDown("enter"))
		{
			gamestate = "dialoguesim";
		}

		
		
	}

	if(gamestate === "dialoguesim")
	{
		fill("black");
		text("only three cars.One of then will be your's.",60,260);
		text("Vicky : But I can't drive faster than",30,280);
		text("them.",60,295);
		text("Simeon : Hmm.I knew it,that's why you",30,315);
		text("will hack both the cars,drain their",60,330);
		text("batteries and gradually you will win",60,345);
		text("Vicky : Good idea, i will do it!",30,365);
		text("Press F to continue",300,380);
		if(keyDown("f"))
		{
			gamestate = "arenamission";
		}
	}

	if(gamestate === "arenamission")
	{
		keyPressed();
		textbox.visible = false;
		fill("yellow");
		text("Go to Arena",2,10);
		if(vicky.isTouching(car2))
		{
			gamestate = "inthecar";
		}
	}

	if(gamestate === "inthecar")
	{
		vicky.visible = false;
		fill("blue");
		text("Hack both the cars and drain their battery !!",100,380);
		laptop.visible = true;
		fill("green");
		text("Available devices",450,350)
		text("Hack Orange Car - Press Enter",400,380);
		text("Hack Black car - Press Enter",400,390);
		keyPressedrace();

		if(keyDown("enter"))
		{
			gamestate = "hackon2";
		}
	}

	if(gamestate === "hackon2")
	{
		keyPressedrace();
		laptop.visible = true;
		fill("green");
		text("Drain battery - Press Enter",450,350);

		if(keyDown("enter"))
		{
			gamestate = "startrace";
		}
	}


    if(gamestate === "startrace")
	{
		keyPressedrace();
		laptop.visible = false;
		fill("blue");
		text("Battery Drained ,Start the Race",100,380);
		if(arenat === 5)
		{
			gamestate = "won";
		}
	}

	if(gamestate === "won")
	{
		fill("yellow");
		textSize(30);
		text("You Won",100,200);

		fill("red");
		textSize(20);
		text("No one caught you while hacking the cars",100,350);
		text("press F to continue",2,10);
		
		if(keyDown("f"))
		{
			vicky.x = 300;
			vicky.y = 210;
		}
	}

	
	
}

function keyPressed(){
	if(keyDown("right"))
	{
		vicky.changeAnimation("rightl",vickyrightimg)
		bg.x = bg.x - 4;
		bg2.x = bg2.x - 4;
		lester.x = lester.x - 4;
		blackcar.x = blackcar.x - 4;
		vip.x = vip.x - 4;
		invg.x = invg.x -4;
		housemission2.x = housemission2.x -4;
		simeon.x = simeon.x - 4;
		arena.x = arena.x - 4;
		car1.x = car1.x - 4;
		car2.x = car2.x - 4;
		car3.x = car3.x - 4;
	}else if(keyWentUp("right"))
	{
		vicky.changeAnimation("stillr",vickystableRight)
	}
	if(keyDown("left"))
	{
		vicky.changeAnimation("leftl",vickyleftimg)
		bg.x = bg.x + 4;
		bg2.x = bg2.x + 4;
		lester.x = lester.x + 4;
		blackcar.x = blackcar.x + 4;
		vip.x = vip.x + 4;
		invg.x = invg.x +4;
		housemission2.x = housemission2.x +4;
		simeon.x = simeon.x + 4;
		arena.x = arena.x + 4;
		car1.x = car1.x + 4;
		car2.x = car2.x + 4;
		car3.x = car3.x + 4;
	}else if(keyWentUp("left"))
	{
		vicky.changeAnimation("stilll",vickystableLeft)
	}

	if(keyDown("up"))
	{
		vicky.changeAnimation("upl",vickyupimg)
		bg.y = bg.y + 4;
		bg2.y = bg2.y + 4;
		lester.y = lester.y + 4;
		blackcar.y = blackcar.y + 4;
		vip.y = vip.y + 4;
		invg.y = invg.y +4;
		housemission2.y = housemission2.y +4
		simeon.y = simeon.y + 4;
		arena.y = arena.y + 4;
		car1.y = car1.y + 4;
		car2.y = car2.y + 4;
		car3.y = car3.y + 4;
	}else if(keyWentUp("up"))
	{
		vicky.changeAnimation("stillu",vickystableup)
	}

	if(keyDown("down"))
	{
		vicky.changeAnimation("downl",vickydownimg)
		bg.y = bg.y - 4;
		bg2.y = bg2.y - 4;
		lester.y = lester.y - 4;
		blackcar.y = blackcar.y - 4;
		vip.y = vip.y - 4;
		invg.y = invg.y -4;
		housemission2.y = housemission2.y -4
		simeon.y = simeon.y - 4;
		arena.y = arena.y - 4;
		car1.y = car1.y - 4;
		car2.y = car2.y - 4;
		car3.y = car3.y - 4;
	}else if(keyWentUp("down"))
	{
		vicky.changeAnimation("stilld",vickystableDown)
	}

}

function keyPressedcar(){
	if(keyDown("up"))
	{
		bg.x = bg.x - 7;
		bg2.x = bg2.x - 7;
		lester.x = lester.x - 7;
		vicky.x = vicky.x -7;
		vip.x = vip.x - 7;
		invg.x = invg.x -7;
		housemission2.x = housemission2.x -7;
		simeon.x = simeon.x - 7;
		arena.x = arena.x - 7;
		car1.x = car1.x - 7;
		car2.x = car2.x - 7;
		car3.x = car3.x - 7;
	}

	if(keyDown("down"))
	{
		bg.x = bg.x + 7;
		bg2.x = bg2.x + 7;
		lester.x = lester.x + 7;
		vicky.x = vicky.x + 7;
		vip.x = vip.x + 7;
		invg.x = invg.x +7;
		housemission2.x = housemission2.x +7;
		simeon.x = simeon.x + 7;
		arena.x = arena.x + 7;
		car1.x = car1.x + 7;
		car2.x = car2.x + 7;
		car3.x = car3.x + 7;
	}

	if(keyDown("right"))
	{
		bg.y = bg.y - 7;
		bg2.y = bg2.y - 7;
		lester.y = lester.y - 7;
		vicky.y = vicky.y -7;
		vip.y = vip.y - 7;
		invg.y = invg.y -7;
		housemission2.y = housemission2.y -7;
		simeon.y = simeon.y - 7;
		arena.y = arena.y - 7;
		car1.y = car1.y - 7;
		car2.y = car2.y - 7;
		car3.y = car3.y - 7;
	}

	if(keyDown("left"))
	{
		bg.y = bg.y + 7;
		bg2.y = bg2.y + 7;
		lester.y = lester.y + 7;
		vicky.y = vicky.y + 7;
		vip.y = vip.y + 7;
		invg.y = invg.y +7;
		housemission2.y = housemission2.y +7
		simeon.y = simeon.y + 7;
		arena.y = arena.y + 7;
		car1.y = car1.y + 7;
		car2.y = car2.y + 7;
		car3.y = car3.y + 7;
	}

}


function keyPressedrace(){
	/*if(arena.y > 400)
	{
		arena.y = arena.y - 300;
	}*/
	if(keyDown("up"))
	{
		arena.y =  arena.y + 7;
		car1.velocityY = car1.velocityY + 0.3;
		car3.velocityY = car3.velocityY + 0.3;
		
		
	}else if(keyWentUp("up"))
	{
		arena.velocityY = 0;
		car1.velocityY =  car1.velocityY - 0.3;
		car3.velocityY = car3.velocityY - 0.3;
	}

	if(keyDown("left"))
	{
		car2.x = car2.x - 4;
	}

	if(keyDown("right"))
	{
		car2.x= car2.x + 4;
	}

	if(arena.y > 350)
	{
		arena.y = arena.y - 400;
		arenat = arenat + 1;
	}
}

