var thickness, wall;
var bullet, bullet1, speed, weight;


function setup() {
  createCanvas(1600,400);
  bullet = createSprite(0, 200, 100, 35);
  bullet1 = createSprite(35, 200, 35, 35);
  wall = createSprite(1535, 200, thickness, height/2);
 
  
  bullet.shapeColor = color (18,166,66);
  bullet1.shapeColor = color (181,166,66);
 

  speed = random(223, 321);
  weight = random(30, 50);
  thickness = random(22, 83);

  bullet.velocityX = speed;
  bullet1.velocityX = bullet.velocityX;
}

function draw() {
  background(0,0,0);

  bullet.collide(wall);
  bullet1.collide(wall);

  formula();

  drawSprites();
}

function hasCollided(lbullet, lwall) {
  bulletRightEdge = lbullet.x + lbullet.width;
  wallLeftEdge = lwall.x;
  if (bulletRightEdge >= wallLeftEdge) {
    return true;
  }
  return false;
}

function formula() {
  if (hasCollided(bullet, wall)) {
    bullet.velocityX = 0;
    bullet1.velocityX = 0;
    var damage = 0.5 * weight * speed * speed / (thickness * thickness * thickness);

    if (damage > 10) {
      wall.shapeColor = color (255,0,0);
    }
    if (damage < 10) {
      wall.shapeColor = color (0,255,0);
    }
  }
}