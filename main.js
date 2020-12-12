//variables
    var bird, tunnel, tunnel2;
    var birdImg, tunnelImg, tunnelImg2;
    var bgImg, play, end, gameState;
    var tunnels;
    var score;
//loading images
    function preload(){
        tunnelImg = loadImage("pipe.png");
        bgImg = loadImage("Untitled.png");
        birdImg = loadImage("flappybird.gif");
        tunnelImg2 = loadImage("pipe2.png")
    }
//setup
    function setup(){
        createCanvas(800,500);
        //creating objects
        bg = createSprite(250,250,600,600);
        bird = createSprite(50,175,10,10);
        //adding images
        bg.addImage(bgImg);
        bird.addImage(birdImg);
        //scaling
        bird.scale = 0.04;
        bg.scale = 2;
        //vars
        play = 1;
        end  = 0;
        gameState = play;

        score = 0;
        tunnels = new Group();
    }
//main code
    function draw(){
        background("white");
        bg.velocityX = -(3 + score/100)
        bird.velocityY = 4;
            if(gameState == play){
                //controls
                if(keyDown("W")){
                    bird.velocityY = -5;
                }
                //loop game
                    if(bg.x < 0){
                        bg.x = bg.width/2;
                    }
                //tunnels
                    if(frameCount % 100 == 0){
                        tunnel = createSprite(400,random(400,500),50,100);
                        tunnel.scale = 0.3;
                        tunnel.addImage(tunnelImg);
                        tunnel.velocityX = -(3 + score/100);
                        tunnel.debug = true;
                        tunnels.add(tunnel);

                        tunnel2 = createSprite(400,random(0,100),50,100);
                        tunnel2.scale = 0.3;
                        tunnel2.addImage(tunnelImg2);
                        tunnel2.velocityX = -(3 + score/100)
                        tunnel2.debug = true;
                        tunnels.add(tunnel2);

                        if(bird.isTouching(tunnels)){
                            gameState = end;
                        }
                    }
                //score 
                    score = Math.round(frameCount / 2)
            } else if(gameState == end){
                bird.velocityY = 0;
                bg.velocityX = 0;
                tunnels.setVelocityXEach(0);
                var restart
                restart = createButton("Restart Game");
                restart.position(400,250);
                restart.mousePressed(restartg);
            }
        //console.log(bg.x);
        drawSprites();
        text(score,770,10);
    }
function restartg(){
    gameState = play;
    tunnels.removeSprites();
    score = 0;
}
