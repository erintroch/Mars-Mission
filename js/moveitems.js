import Vector from './classes/Vector.js';

{

    let checkAmountArray = [];
    let checkPhone = ``;
    let checkWheel = ``;

    const getWheel = () => {
        const $itemBag = document.querySelector(`.item-bag`);
        const getWheel = document.querySelector(`.rover-wheel`);
        getWheel.classList.remove(`transparancy`);
        getWheel.classList.add(`show-wheel`);

        if (checkWheel !== `wheel`) {
            if (document.querySelector(`.clickeble-ductape`)) {
                const getNewDuctape = document.querySelector(`.clickeble-ductape`);
                getNewDuctape.addEventListener(`click`, moveDuctape);
            }
            checkWheel = `wheel`;
        }
    }

    const getPhone = () => {
        const $itemBag = document.querySelector(`.item-bag`);
        const getPhone = document.querySelector(`.phone`);
        getPhone.classList.remove(`transparancy`);
        getPhone.classList.add(`show-ductape`);

        if (checkPhone !== `phone`) {
            if (!document.querySelector(`.hyper-check`)) {
                console.log($itemBag);
                $itemBag.innerHTML += `<div class="single-item">
        <img class="phone clickeble-phone" src="./assets/img/phone-r.png" alt="phone" width="20" height="36">
        <p class="name__single-item">Phone</p>
        </div>`;
                checkPhone = `phone`;
            } else {
                console.log($itemBag);
                $itemBag.innerHTML += `<div class="single-item">
        <img class="phone clickeble-phone rm-check" src="./assets/img/phone-rm.png" alt="phone" width="24" height="36">
        <p class="name__single-item">Phone</p>
        </div>`;
                checkPhone = `phone`;
            }

        }

        document.querySelector(`.hyper-check`);

        if (document.querySelector(`.clickeble-ductape`)) {
            const getNewDuctape = document.querySelector(`.clickeble-ductape`);
            getNewDuctape.addEventListener(`click`, moveDuctape);
        }
    }

    const getDuctape = () => {
        const $itemBag = document.querySelector(`.item-bag`);
        const getDuctape = document.querySelector(`.ductape`);
        getDuctape.classList.remove(`transparancy`);
        getDuctape.classList.add(`show-ductape`);
        if (checkAmountArray.length < 1) {
            console.log($itemBag);
            $itemBag.innerHTML += `<div class="single-item">
        <img class="ductape clickeble-ductape" src="./assets/img/ductape2.png" alt="ductape" width="32" height="25">
        <p class="name__single-item">Ductape</p>
        </div>`;
            checkAmountArray.push(1);
        }

        const getNewDuctape = document.querySelector(`.clickeble-ductape`);
        getNewDuctape.addEventListener(`click`, moveDuctape);
    }

    const moveDuctape = () => {
        console.log(`COMMOOOOONNNN`);

        const $clickebleItems = document.querySelector(`.clickeble-items`);
        if (document.querySelector(`.phone`)) {
            if (checkPhone !== `phone` && checkWheel !== `wheel`) {
                $clickebleItems.innerHTML = `<img class="draw-img phone transparancy" src="./assets/img/phone-r.png" alt="phone" width="29" height="54">
                <img class="draw-img rover-wheel transparancy" src="./assets/img/wheel.png" alt="wheel" width="35" height="33">`;

                /* ----- Voor als je ductape uitvoert voor het vinden van de phone -----*/
                const getItem10 = document.querySelector(`.iso-item-82`);
                const getImg10 = document.querySelector(`.phone`);

                const infoItem10 = getItem10.getBoundingClientRect();
                getImg10.style.top = `${infoItem10.top - (getImg10.height - infoItem10.height) - 20}px`;
                getImg10.style.left = `${infoItem10.left - (getImg10.width / 2) + (infoItem10.width / 2)}px`;

                const getItem14 = document.querySelector(`.iso-item-59`);
                const getImg14 = document.querySelector(`.rover-wheel`);

                const infoItem14 = getItem14.getBoundingClientRect();
                getImg14.style.top = `${infoItem14.top - (getImg14.height - infoItem14.height) - 25}px`;
                getImg14.style.left = `${infoItem14.left - (getImg14.width / 2) + (infoItem14.width / 2) - 0}px`;

                const selectPhone = document.querySelector(`.phone`);
                selectPhone.addEventListener(`click`, getPhone);

                const selectWheel = document.querySelector(`.rover-wheel`);
                selectWheel.addEventListener(`click`, getWheel);
            }
        } else if (checkPhone !== `phone` && checkWheel === `wheel`) {
            $clickebleItems.innerHTML = `<img class="draw-img phone transparancy" src="./assets/img/phone-r.png" alt="phone" width="29" height="54">
                <img class="draw-img rover-wheel show-wheel" src="./assets/img/wheel.png" alt="wheel" width="35" height="33">`;

            const getItem10 = document.querySelector(`.iso-item-82`);
            const getImg10 = document.querySelector(`.phone`);

            const infoItem10 = getItem10.getBoundingClientRect();
            getImg10.style.top = `${infoItem10.top - (getImg10.height - infoItem10.height) - 20}px`;
            getImg10.style.left = `${infoItem10.left - (getImg10.width / 2) + (infoItem10.width / 2)}px`;

            const selectPhone = document.querySelector(`.phone`);
            selectPhone.addEventListener(`click`, getPhone);

        } else {
            $clickebleItems.innerHTML = ``;
        }

        const aboveTest = document.querySelector(`.canvas-four`);
        aboveTest.classList.add(`canvas-above`);
        console.log(aboveTest);
        const $canvas = document.querySelector(`.canvas-above`),
            ctx = $canvas.getContext(`2d`),
            mouse = new Vector(0, 0);
        console.log(mouse);

        const mousemove = event => {
            mouse.x = event.clientX;
            mouse.y = event.clientY;
        };

        const getClick = () => {
            //console.log(`You Clicked my friend`);
            const $canvasFour = document.querySelector(`.canvas-four`);
            $canvasFour.classList.add(`ductape-click-check`);
            console.log(`OKEEEEEEE`);

            const $tipsTip = document.querySelector(`.tips-tip`);
            $tipsTip.textContent = `If you need certain things like a satelite, a rocket-engine, a drone, a bicycle... just call for them loudly :p`;
            const $tipsTwo = document.querySelector(`.tips-tip-two`);
            $tipsTwo.textContent = `You can still search for other items on Mars.`;

            /*------ MAKE HAPPY ROBOT ---------------*/

            const $blink = document.querySelectorAll(`.shadow-color-eye`);
            console.log($blink);
            $blink.forEach(eye => {
                eye.innerHTML = `<div class="eye-blinking">
                    <div class="blink"></div>
                    <div class="blink"></div>
                </div>
                <div class="color-eye__red"></div>
                <div class="color-eye__blue"></div>
                <div class="eye"></div>`;
            })
            const $mouthHappy = document.querySelector(`.mouth-happy`);
            $mouthHappy.classList.add(`mouth-happy2`);

            /*--------------------------------------*/
        }

        const getClickOut = () => {
            if (!document.querySelector(`.canvas-above`)) {
                //console.log(`holi moly`);
                aboveTest.classList.add(`special-duc-test`);
            } else {
                //console.log(document.querySelector(`.canvas-above`));
                //console.log(`You Clicked my friend, out of the range`);
                const $canvasAbove = document.querySelector(`.canvas-four`);
                $canvasAbove.classList.remove(`canvas-above`);
                console.log($canvasAbove);
                checkAmountArray = [];
            }
        }

        const draw = () => {
            //console.log(aboveTest);
            if (document.querySelector(`.canvas-above`)) {
                //console.log(`HOOOOOOOWWWW??????`);
                const getItem3 = document.querySelector(`.iso-item-41`);
                const infoItem3 = getItem3.getBoundingClientRect();
                const numy = infoItem3.top;
                const numx = infoItem3.left;

                //console.log(mouse);
                if (mouse.x > numx + 75 && mouse.x < numx + 120 && mouse.y > numy - 55 && mouse.y < numy - 25) {
                    // if (document.addEventListener(`click`, getClick)) {
                    //     getClick();
                    // }
                    document.addEventListener(`click`, getClick);
                    //console.log(`dit werkt momenteel wel`);
                }
                if (document.querySelector(`.canvas-above`)) {

                    document.addEventListener(`click`, function () {
                        mouse.x = event.clientX;
                        if (document.querySelector(`.canvas-above`) && mouse.x < $canvas.width - 200) {
                            //console.log($canvas.width - 200);
                            //console.log(mouse.x);
                            setTimeout(function () {
                                //console.log(document.querySelector(`.canvas-above`));
                                //console.log(`dit is iets`);
                                getClickOut();
                            }, 1);
                        }

                    });
                }
            }
            window.requestAnimationFrame(draw);
        }

        const executeFunction = () => {
            $canvas.width = window.innerWidth;
            $canvas.height = window.innerHeight;

            $canvas.addEventListener(`mousemove`, mousemove);
            draw();
        }

        executeFunction();

    }

    /*---------*/

    const getRover = () => {
        if (document.querySelector(`.userflow-ductape`)) {
            console.log(`jup, the rover is missing a wheel...`);
        } else {
            const $overlayFail = document.querySelector(`.overlay-fail`);
            $overlayFail.classList.remove(`hidden`);
            $overlayFail.classList.add(`animate-overlay-fail`);
            const $subFailMission = document.querySelector(`.sub-fail-message`);
            $subFailMission.textContent = `You can check what's wrong with the rover later! Just fix the gap in the conservatory first to safe the only living organisms on Mars!`;
        }
    }

    const init = () => {

        const removeDelay = () => {
            console.log(`wait 1sec`);

            const $switchOverlay = document.querySelector(`.switch-overlay`);
            $switchOverlay.classList.add(`fade-out__switch`);

            setTimeout(function () {
                $switchOverlay.classList.add(`hidden`);
            }, 1500);
        }

        /*---------------- BLINK ROBOT -------------------*/

        document.onclick = function () {
            const $blink = document.querySelectorAll(`.shadow-color-eye`);
            //console.log($blink);
            $blink.forEach(eye => {
                eye.innerHTML = `<div class="eye-blinking">
                    <div class="blink"></div>
                    <div class="blink"></div>
                </div>
                <div class="color-eye__red"></div>
                <div class="color-eye__blue"></div>
                <div class="eye"></div>`;
            })
        };

        /*------------------------------------------------*/

        const selectDuctape = document.querySelector(`.ductape`);
        selectDuctape.addEventListener(`click`, getDuctape);

        const selectPhone = document.querySelector(`.phone`);
        selectPhone.addEventListener(`click`, getPhone);

        const selectRover = document.querySelector(`.rover`);
        selectRover.addEventListener(`click`, getRover);

        const selectWheel = document.querySelector(`.rover-wheel`);
        selectWheel.addEventListener(`click`, getWheel);

        removeDelay();

    };


    init();


}