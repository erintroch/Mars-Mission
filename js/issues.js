import Bol from "./classes/Bol.js";

{

    const $canvas = document.querySelector(`.canvas-three`),
        ctx = $canvas.getContext(`2d`);
    const bollen = [];
    let lifespan = 1;

    const init = () => {
        for (let i = 0; i < 30; i++) {
            const bol = new Bol($canvas, Math.random() * $canvas.width, Math.random() * $canvas.height, lifespan);
            bollen.push(bol);
        }
        $canvas.width = window.innerWidth;
        $canvas.height = window.innerHeight;
        console.log(bollen);
        draw();
        window.addEventListener(`resize`, event => resize(event));
    };

    const resize = () => {
        console.log($canvas);
        $canvas.width = window.innerWidth;
        $canvas.height = window.innerHeight;
    };

    const draw = () => {
        ctx.clearRect(0, 0, $canvas.width, $canvas.height);

        const getItem3 = document.querySelector(`.iso-item-41`);
        const infoItem3 = getItem3.getBoundingClientRect();
        const numy = infoItem3.top;
        const numx = infoItem3.left;

        const getItem9 = document.querySelector(`.iso-item-13`);
        const infoItem9 = getItem9.getBoundingClientRect();
        const numyMast = infoItem9.top;
        const numxMast = infoItem9.left;

        const getItem5 = document.querySelector(`.iso-item-17`);
        const infoItem5 = getItem5.getBoundingClientRect();
        const numyPanelOne = infoItem5.top;
        const numxPanelOne = infoItem5.left;

        const getItem8 = document.querySelector(`.iso-item-28`);
        const infoItem8 = getItem8.getBoundingClientRect();
        const numyPanelTwo = infoItem8.top;
        const numxPanelTwo = infoItem8.left;

        if (!document.querySelector(`.ductape-click-check`)) {
            bollen.forEach(bol => {
                bol.draw();
            });
            lifespan -= 0.03;
        } else {
            const $canvasFour = document.querySelector(`.canvas-four`);
            $canvasFour.classList.remove(`canvas-above`);
            ctx.fillStyle = "rgb(75, 75, 75)";
            ctx.beginPath();
            ctx.moveTo(numx + 120, numy - 25);
            ctx.lineTo(numx + 115, numy - 21);
            ctx.lineTo(numx + 110, numy - 30);
            ctx.lineTo(numx + 107, numy - 35);
            ctx.lineTo(numx + 113, numy - 40);
            ctx.fill();
            ctx.closePath();
            const makeDuctapeUsed = document.querySelector(`.clickeble-ductape`);
            makeDuctapeUsed.setAttribute(`src`, `./assets/img/ductapeused.png`);

            const $checkUserFlow = document.querySelector(`.check-userflow`);
            $checkUserFlow.classList.add(`userflow-ductape`);
            //console.log(`hier zit de fout`);
        }

        ctx.strokeStyle = "rgb(75, 75, 75)";
        ctx.beginPath();
        ctx.moveTo(numx + 102, numy - 25);
        ctx.lineTo(numx + 107, numy - 30);
        ctx.lineTo(numx + 115, numy - 30);
        ctx.lineTo(numx + 122, numy - 35);
        ctx.stroke();
        ctx.closePath();
        ctx.beginPath();
        ctx.moveTo(numx + 107, numy - 30);
        ctx.lineTo(numx + 103, numy - 33);
        ctx.stroke();
        ctx.closePath();

        ctx.strokeStyle = "rgb(250, 200, 200)";
        ctx.beginPath();
        ctx.moveTo(numxMast + 57.5, numyMast + 41);
        ctx.bezierCurveTo(600, 200, 500, 150, numxPanelOne + 45.5, numyPanelOne + 58);
        ctx.stroke();
        ctx.closePath();
        ctx.strokeStyle = "rgb(250, 159, 150)";
        ctx.beginPath();
        ctx.moveTo(numxMast + 57.5, numyMast + 41);
        ctx.bezierCurveTo(580, 220, 550, 150, numxPanelTwo + 45.5, numyPanelTwo + 58);
        ctx.stroke();
        ctx.closePath();

        window.requestAnimationFrame(draw);
    }


    init();
}