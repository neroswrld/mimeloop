let canvas;
const width = 1000;
const height = 500;


function setup() {
  canvas = createCanvas(width, height);
}



let spaceship;
const spaceshipWidth = 50;
const spaceshipHeight = 50;

function createSpaceship() {
  const x = width / 2 - spaceshipWidth / 2;
  const y = height - spaceshipHeight;
  spaceship = { x, y };
}

function drawSpaceship() {
  rect(spaceship.x, spaceship.y, spaceshipWidth, spaceshipHeight);
}


let asteroids = [];
const asteroidWidth = 50;
const asteroidHeight = 50;
const asteroidSpeed = 5;

function createAsteroid() {
  const x = random(width - asteroidWidth);
  const y = -asteroidHeight;
  const asteroid = { x, y };
  asteroids.push(asteroid);
}

function drawAsteroids() {
  for (let i = 0; i < asteroids.length; i++) {
    const asteroid = asteroids[i];
    asteroid.y += asteroidSpeed;
    rect(asteroid.x, asteroid.y, asteroidWidth, asteroidHeight);
    }
    }
    const spaceshipSpeed = 10;

    function moveSpaceship() {
      if (keyIsDown(LEFT_ARROW)) {
        spaceship.x -= spaceshipSpeed;
      }
      if (keyIsDown(RIGHT_ARROW)) {
        spaceship.x += spaceshipSpeed;
      }
    }
    
    function keyPressed() {
      if (keyCode === ESCAPE) {
        noLoop();
      }
    }
    
    function setup() {
      canvas = createCanvas(width, height);
      createSpaceship();
      setInterval(createAsteroid, 1000);
    }
    
    function draw() {
      background(0);
      drawSpaceship();
      drawAsteroids();
      moveSpaceship();
      if (checkCollisions()) {
        noLoop();
      }
    }
    function checkCollisions() {
        for (let i = 0; i < asteroids.length; i++) {
          const asteroid = asteroids[i];
          if (
            spaceship.x < asteroid.x + asteroidWidth &&
            spaceship.x + spaceshipWidth > asteroid.x &&
            spaceship.y < asteroid.y + asteroidHeight &&
            spaceship.y + spaceshipHeight > asteroid.y
          ) {
            return true;
          }
        }
        return false;
        const spaceshipSpeed = 10;
      }
      

function moveSpaceship() {
  if (keyIsDown(LEFT_ARROW)) {
    spaceship.x -= spaceshipSpeed;
  }
  if (keyIsDown(RIGHT_ARROW)) {
    spaceship.x += spaceshipSpeed;
  }
}

function keyPressed() {
  if (keyCode === ESCAPE) {
    noLoop();
  }
}

function setup() {
  canvas = createCanvas(width, height);
  createSpaceship();
  setInterval(createAsteroid, 1000);
}

function draw() {
  background(0);
  drawSpaceship();
  drawAsteroids();
  moveSpaceship();
  if (checkCollisions()) {
    noLoop();
  }
}
