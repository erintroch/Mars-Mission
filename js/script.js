import Vector from './classes/Vector.js';
import Particle from './classes/Particle.js';

const $canvas = document.querySelector(`.canvas`),
    ctx = $canvas.getContext(`2d`),
    mouse = new Vector(0, 0);
let position = ``;

let particles = [];
let checkamount = [];

const init = () => {
    resize();
    $canvas.addEventListener(`mousemove`, mousemove);
    window.addEventListener(`resize`, event => resize(event));
    draw();

    function fallingStar() {
        setTimeout(function () {
            if (document.querySelector(`.no-star`)) {
                let $fallingStar = document.querySelector(`.no-star`);
                $fallingStar.classList.add(`falling-star-one`);
                $fallingStar.classList.remove(`no-star`);
            }
        }, 10000);
    };
    function fallingStarTwo() {
        setTimeout(function () {
            if (document.querySelector(`.falling-star-one`)) {
                let $fallingStar = document.querySelector(`.falling-star-one`);
                $fallingStar.classList.add(`falling-star-two`);
            }
        }, 20000);
    }

    fallingStar();
    fallingStarTwo();

    if (document.getElementById(`spacesound`)) {
        const mySound = document.getElementById(`spacesound`);
        mySound.volume = 0.1;
    }

};

const mousemove = event => {
    mouse.x = event.clientX;
    mouse.y = event.clientY;
};

const resize = () => {
    console.log($canvas);
    $canvas.width = window.innerWidth;
    $canvas.height = window.innerHeight;
};

const draw = () => {
    // Canvas zwart maken
    ctx.clearRect(0, 0, $canvas.width, $canvas.height);


    //const particle = new Particle(Math.random() * $canvas.width, 0);
    const particle = new Particle(Math.random() * $canvas.width, Math.random() * $canvas.height, mouse.x, mouse.y);
    //const particle = new Particle(mouse.x, mouse.y);
    //console.log(mouse.x);
    if (checkamount.length > 2) {
        particles.push(particle);
        checkamount = [];
    }

    checkamount.push(1)

    particles.forEach(particle => {
        particle.draw(ctx);
        //particle.move(position);
    })

    //console.log(mouse.x, mouse.y);

    particles = particles.filter(particle => particle.isAlive);
    //console.log(particles.length);

    // Elke 60fps uitvoeren
    window.requestAnimationFrame(draw);
}

init();