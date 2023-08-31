import Vector from './Vector.js';
import { random } from '../functions/lib.js';

export default class Particle {
    constructor(x, y, mouseX, mouseY) {
        this.location = new Vector(x, y);
        this.velocity = new Vector(mouseX, mouseY);
        this.acceleration = new Vector(0, 0.05);
        this.lifespan = 1;
        this.lifecheck = 0;
        this.longness = 0;
        //this.movement = new Vector(mouseX * 0.1 / window.innerWidth, mouseY * 0.1 / window.innerHeight);
    }
    draw(ctx) {
        //this.velocity.add(this.acceleration);
        //console.log(this.movement);
        //this.location.add(this.movement);
        ctx.beginPath();
        ctx.fillStyle = `rgba(255, 255, 255, ${this.lifespan / 250})`;
        ctx.arc(this.location.x, this.location.y, 2, 0, Math.PI * 2, true);
        ctx.fill();
        ctx.closePath();
        if (this.lifespan < 250 && this.longness === 0) {
            this.lifespan++;
            if (this.lifespan === 250) {
                this.longness = 1;
            };
        };
        if (this.longness === 1) {
            this.lifespan--;
            if (this.lifespan === 0) {
                this.lifecheck = 1;
            }

        };
        //console.log(this.lifespan)
    }

    // move(position) {
    //     this.location.add(this.movement);
    // }

    get isAlive() {
        return this.lifecheck === 0;
    }
}