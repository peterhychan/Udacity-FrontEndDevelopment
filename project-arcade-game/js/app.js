// Enemies our player must avoid
var counter =1;
var Enemy = function(x ,y, speed) {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started
    this.x=x;
    this.y=y;
    this.speed=speed;
    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/enemy-bug.png';
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
    this.x +=this.speed *dt;
    if(this.x>550){
        this.x=-100;
        this.speed=Math.floor(Math.random()*100)+100;
    }
    if (player.x < this.x + 60 &&
        player.x + 40 > this.x &&
        player.y < this.y + 30 &&
        30 + player.y > this.y) {
        player.x = 200;
        player.y = 400;
        document.querySelector('body').style.backgroundColor = 'yellow';
        setTimeout(function () {
            document.querySelector('body').style.backgroundColor = 'white';
        }, 200);
        document.querySelector('h2').innerHTML = 'You can do it!';
        setTimeout(function () {
            if(counter%2===0){
                document.querySelector('h2').innerHTML = 'Come on!';
                document.querySelector('h3').innerHTML = counter+' hit(s)';
                counter++;
            }else{
                document.querySelector('h2').innerHTML = 'Never Give Up!';
                document.querySelector('h3').innerHTML = counter+' hit(s)';
                counter++;
            }
        }, 500);
    }
};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.
var Player = function(x, y, speed) {
    this.x = x;
    this.y = y;
    this.speed = speed;
    this.sprite = 'images/char-boy.png';
};

Player.prototype.update = function() {
    if (this.y > 400) {
        this.y = 300;
    }
    if (this.x > 400) {
        this.x = 400;
    }
    if (this.x < 0) {
        this.x = 0;
    }
    if (this.y < 0) {
        this.x = 200;
        this.y = 380;
    }
};

Player.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

Player.prototype.handleInput = function(key) {
        if (key ==='left'){
            this.x -= this.speed + 50;
        }else if(key ==='right'){
            this.x += this.speed + 50;
        }else if(key ==='up'){
            this.y -= this.speed + 30;
        }else{
            this.y += this.speed + 30;
        }
};

// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player
var allEnemies = [];
var enemyPos = [60, 140, 220];
var player = new Player(200, 400, 50);
var enemy;
enemyPos.forEach(function(posY) {
    enemy = new Enemy(0, posY, 100 + Math.floor(Math.random() * 512));
    allEnemies.push(enemy);
});


// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});
