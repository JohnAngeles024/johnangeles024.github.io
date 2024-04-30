canvas = document.getElementById("canvas");
var context = canvas.getContext('2d');
W = canvas.width = window.innerWidth;
H = canvas.height = window.innerHeight;
generatorStock = [];
//
// Add the Generator Here :)
//
generator1 = new particleGenerator(W / 2, H / 2, 1, 1, 20);

function loadImage(url) {
    var img = document.createElement("img");
    img.src = url;
    return img;
}


var mouse = {
    x: 0,
    y: 0
};
canvas.addEventListener('mousemove', function (e) {
    mouse.x = e.pageX - this.offsetLeft;
    mouse.y = e.pageY - this.offsetTop;
}, false);


function randomInt(min, max) {
    return min + Math.random() * (max - min);
}

function clamp(value, min, max) {
    return Math.min(Math.max(value, Math.min(min, max)), Math.max(min, max));
}

function particle(x, y, type) {
    this.radius = randomInt(.1, 1);
    this.x = x;
    this.y = y;
    this.vx = randomInt(2, -2);
    this.vy = randomInt(2, -2);
    this.type = type;
}
particle.prototype.update = function () {
    this.x += this.vx;
    this.y += this.vy;
    //  this.vy += 0.3;
    this.vx *= 0.99;
    this.vy *= 0.99;
    this.radius -= .02;
    context.beginPath();
    context.font = "30px arial";
    context.textAlign = "center";
    //	context.globalAlpha=1;
    context.arc(this.x, this.y, 5, Math.PI * 2, false);
    context.globalAlpha = this.radius;
    context.fillStyle = "#FBD214";
    context.fill();
    context.closePath();
    context.globalAlpha = 1;
    if (this.y > H + 5) {
        this.vy *= -.5;
    }
    if (this.x > W || this.x < 0) {
        this.vx *= -1;
    }
}

function particleGenerator(x, y, w, h, number, text) {
    // particle will spawn in this aera
    this.angle = 0;
    this.speed = .03;
    this.baseX = x;
    this.baseY = y;
    this.range = 100;

    this.x = 50;
    this.y = 50;
    this.w = w;
    this.h = h;
    this.number = number;
    this.particles = [];
    this.text = text;
}
particleGenerator.prototype.animate = function () {






    if (this.particles.length < this.number) {
        this.particles.push(new particle(clamp(randomInt(this.x, this.w + this.x), this.x, this.w + this.x),

            clamp(randomInt(this.y, this.h + this.y), this.y, this.h + this.y), this.text));
    }
    for (var i = 0; i < this.particles.length; i++) {
        p = this.particles[i];
        p.update();
        if (p.radius < .1) {
            //a brand new particle replacing the dead one
            this.particles[i] = new particle(clamp(randomInt(this.x, this.w + this.x), this.x, this.w + this.x),

                clamp(randomInt(this.y, this.h + this.y), this.y, this.h + this.y), this.text);
        }
    }


    context.strokeStyle = "#FBD214";
    context.beginPath();
    context.lineWidth = 5;
    context.lineCap = 'round';

    if (this.angle > 2 * Math.PI) {
        this.angle = 0;

    } else {
        context.fillStyle = "#fff";

        context.font = "24px arial";
        context.textAlign = "center";
        context.fillText(Math.round(this.angle * 100 / 6.2831), this.baseX, this.baseY + 12);

        context.closePath();


        context.arc(this.baseX, this.baseY, this.range, 0, this.angle)
        context.stroke();

    }
}

update();

function update() {

    // context.globalAlpha=.5;
    context.clearRect(0, 0, W, H);

    generator1.x = generator1.baseX + Math.cos(generator1.angle) * generator1.range;
    generator1.y = generator1.baseY + Math.sin(generator1.angle) * generator1.range;
    generator1.angle += generator1.speed;


    generator1.animate();


    requestAnimationFrame(update);
}


// Wait for the page content to load
window.addEventListener('load', function() {
    // Add a delay before fading out the loader (in milliseconds)
    var delay = 3000; // Adjust the delay duration as needed (in milliseconds)

    setTimeout(function() {
        // Fade out the loader
        var loader = document.getElementById('canvas');
        loader.style.transition = 'opacity 0.5s ease';
        loader.style.opacity = '0';

        // Remove the loader from the DOM after the fade-out animation completes
        setTimeout(function() {
            loader.parentNode.removeChild(loader);
        }, 600); // Adjust the timeout value to match the duration of the fade-out animation
    }, delay);
});