import Vector from "./Vector.js";
import { random } from '../functions/lib.js';

const getItem3 = document.querySelector(`.iso-item-41`);
const getImg3 = document.querySelector(`.img3`);

const infoItem3 = getItem3.getBoundingClientRect();
const numy = infoItem3.top;
const numx = infoItem3.left;
//console.log(numy);

class Bol {
    constructor($canvas, x, y, lifespan) {
        this.$canvas = $canvas;
        this.ctx = $canvas.getContext(`2d`);
        this.location = new Vector(numx + 110, numy - 30);
        this.velocity = new Vector(random(-0.1, 0.1), random(-1, 0));
        this.lifespan = lifespan;
    }
    draw() {
        this.location.add(this.velocity);

        if (this.location.x > numx + 130) {
            this.location.x = numx + 110;
        }
        if (this.location.x < numx + 90) {
            this.location.x = numx + 110;
        }
        if (this.location.y > numy - 30) {
            this.location.y = this.location.y;
        }
        if (this.location.y < 275) {
            this.location.y = numy - 30;
            this.location.x = numx + 110;
        }

        this.ctx.beginPath();
        this.ctx.fillStyle = `rgba(250, 250, 250, 0.5)`;
        this.ctx.arc(this.location.x, this.location.y, 2, 0, Math.PI * 2, true);
        this.ctx.fill();
        this.ctx.closePath();
    }
}

export default Bol;