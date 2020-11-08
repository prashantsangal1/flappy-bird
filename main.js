//variables
    var bird, tunnel;
    var birdImg, tunnelImg;
    var bgImg;
    var engine, world;
//loading images
    function preload(){
        tunnelImg = loadImage("images/pipe.jpg");
        bgImg = loadImage("images/Untitled.png");
        birdImg = loadImage("images/flappybird.gif");
    }
//setup
    function setup(){
        createCanvas(500,500);
        //creating objects
        bg = createSprite(250,250,600,600);
        bird = createSprite(50,175,10,10);
        tunnel = createSprite(150,150,10,30);
        //adding images
        tunnel.addImage(tunnelImg);
        bg.addImage(bgImg);
        bird.addImage(birdImg);
        //scaling
        bird.scale = 0.1;
        tunnel.scale = 0.1;
        bg.scale = 2;

    }
//main code
    function draw(){
        background("white");
        bg.velocityX = -10; 
        bird.velocityX = 1;
        bird.velocityY = 4;
        //control scheme
            if(keyDown("W")){
                bird.y = bird.y - 6;
            }
        //loop game
        if(bg.x < 0){
           bg.x = bg.width/2;
        }
        
        //console.log(bg.x);
        
    drawSprites();
    }
