{

    let droneArray = [];
    let checkBothPanels = [];

    let droneCommandCheck = true;
    let phoneCommandCheck = true;
    let checkPickup = false;
    let checkRover = false;

    let checkDrone = true;
    let checkExtDrone = false;
    const $checkUserFlow = document.querySelector(`.check-userflow`);

    const $canvas = document.querySelector(`.canvas-two`),
        ctx = $canvas.getContext(`2d`);


    const resize = event => {
        $canvas.width = window.innerWidth;
        $canvas.height = window.innerHeight;
    };

    const createDrone = () => {
        const $createImages = document.querySelector(`.create-images`);
        const drone = `<img id="drone" class="draw-img drone" src="./assets/img/drone.png" alt="drone" width="115" height="82">`;
        $createImages.innerHTML += drone;
    }

    createDrone();

    const createDroneWithWheel = () => {
        const $createImages = document.querySelector(`.create-images`);
        const droneWithWheel = `<img id="wheeldrone" class="draw-img" src="./assets/img/dronewithwheel.png" alt="drone" width="115" height="82">`;
        $createImages.innerHTML += droneWithWheel;
    }

    createDroneWithWheel();

    //var ctx = document.getElementById("ctx").getContext("2d");
    //var canvas = { width: 300, height: 300 };

    let player = {
        x: 850,
        y: -100,
        speed: 2
    };

    let left = false;
    let right = false;
    let up = false;
    let down = false;


    /* ---------------- ARROW KEYS -------------------------*/

    function move() {

        if (left) {
            player.x -= player.speed;
        }
        if (right) {
            player.x += player.speed;
        }
        if (up) {
            player.y -= player.speed;
        }
        if (down) {
            player.y += player.speed;
        }
    }

    document.onkeydown = function (e) {

    }

    document.onkeydown = function (e) {
        if (e.keyCode === 37) left = true;
        if (e.keyCode === 39) right = true;
        if (e.keyCode === 38) up = true;
        if (e.keyCode === 40) down = true;
    }

    document.onkeyup = function (e) {
        if (e.keyCode === 37) left = false;
        if (e.keyCode === 39) right = false;
        if (e.keyCode === 38) up = false;
        if (e.keyCode === 40) down = false;
    }


    //function to clear canvas
    function clearCanvas() {
        ctx.clearRect(0, 0, $canvas.width, $canvas.height);
    }

    // drone
    function showdrone(x, y) {
        var x = player.x;
        var y = player.y;
        if (checkPickup === false) {
            const drone = document.getElementById("drone");
            //console.log(drone)
            ctx.drawImage(drone, x, y);
        }
        if (checkPickup === true) {
            //console.log(`pickup test voice bla`);
            const droneWheel = document.getElementById("wheeldrone");
            ctx.drawImage(droneWheel, x, y);
        }
    }

    const getDrone = () => {
        console.log(`oke er gebeurt iets`);
        const $itemBag = document.querySelector(`.item-bag`);
        //const getDrone = document.querySelector(`.drone`);
        if (droneArray.length < 1) {
            $itemBag.innerHTML += `<div class="single-item">
        <img class="drone clickeble-drone" src="./assets/img/drone.png" alt="drone" width="50" height="37">
        <p class="name__single-item">Drone</p>
        </div>`;
            droneArray.push(1);
        }

        // const getClickebleDrone = document.querySelector(`.clickeble-drone`);
        // getClickebleDrone.addEventListener(`click`, getDroneFunctions);
    }

    const createWindDust = () => {

        const windDust = document.querySelector(".wind-dust-div");

        let x = player.x + 20 + 'px';
        let y = player.y + 20 + 'px';

        //console.log(balls);

        windDust.style.left = x;
        windDust.style.top = y;

    }

    const blowWindDust = () => {
        const getItem5 = document.querySelector(`.iso-item-17`);
        const infoItem5 = getItem5.getBoundingClientRect();
        const numy = infoItem5.top;
        const numx = infoItem5.left;

        const getItem8 = document.querySelector(`.iso-item-28`);
        const infoItem8 = getItem8.getBoundingClientRect();
        const numyTwo = infoItem8.top;
        const numxTwo = infoItem8.left;

        console.log(`dit is een begin`);
        if (player.x > numx - 40 && player.x < numx + 40 && player.y > numy - 70 && player.y < numy + 10) {
            if (!checkBothPanels.includes(1)) {
                console.log(`DAMN DE HECK YES`);
                const getImg5 = document.querySelector(`.img5`);
                getImg5.setAttribute(`src`, `./assets/img/solarpan.png`);
                checkBothPanels.push(1);
            }
        } else if (player.x > numxTwo - 40 && player.x < numxTwo + 40 && player.y > numyTwo - 70 && player.y < numyTwo + 10) {
            if (!checkBothPanels.includes(2)) {
                const getImg8 = document.querySelector(`.img8`);
                getImg8.setAttribute(`src`, `./assets/img/solarpan.png`);
                checkBothPanels.push(2);
            }
        }
        console.log(numxTwo, player.x, numyTwo, player.y);

        if (checkBothPanels.length === 2) {
            console.log(`de lengte is tweee`);

            const $createImages = document.querySelector(`.create-images`);
            $createImages.innerHTML += `<div class="signal"></div>`;

            const getItem9 = document.querySelector(`.iso-item-13`);
            const $signal = document.querySelector(`.signal`);

            const infoItem9 = getItem9.getBoundingClientRect();
            $signal.style.top = `${infoItem9.top - (infoItem9.height) - 40}px`;
            $signal.style.left = `${infoItem9.left + 20}px`;

            $signal.classList.add(`signal-animation`);

            if (document.querySelector(`.clickeble-phone`)) {
                const $clickeblePhone = document.querySelector(`.clickeble-phone`);
                $clickeblePhone.setAttribute(`src`, `./assets/img/phone-rm.png`);
                $clickeblePhone.setAttribute(`width`, `24`);
                $clickeblePhone.classList.add(`rm-check`);
            } else {
                const getAlert = document.querySelector(`.alert-message`);
                console.log(getAlert);
                getAlert.classList.remove(`transparancy`);
                getAlert.classList.add(`show-ductape`);
                getAlert.classList.add(`hyper-check`);

            }

        };

        const windDust = document.querySelector(".wind-dust-div");
        windDust.innerHTML = `<div class="wind-circle wind-circle__one"></div>
        <div class="wind-circle wind-circle__two"></div>
        <div class="wind-circle wind-circle__three"></div>
        <div class="wind-circle wind-circle__four"></div>
        <div class="wind-circle wind-circle__five"></div>`;
    }

    const pickItem = () => {
        console.log(`pick`);
        const getItem14 = document.querySelector(`.iso-item-59`);
        const infoItem14 = getItem14.getBoundingClientRect();
        const numy = infoItem14.top;
        const numx = infoItem14.left;

        if (player.x > numx - 40 && player.x < numx + 40 && player.y > numy - 70 && player.y < numy + 10) {
            console.log(`jajajajajajajajjajajajajjajaj`);
            if (document.querySelector(`.show-wheel`)) {
                const $showWheel = document.querySelector(`.show-wheel`);
                $showWheel.classList.add(`hidden`);
                checkPickup = true;
            }
        } else {
            console.log(`you cannot pickup this item`);
            const $warningMessage = document.querySelector(`.warning-message`);
            $warningMessage.innerHTML = `<p class="tips-tip">You cannot pickup this item.</p>`;
            $warningMessage.classList.remove(`hidden`);
            $warningMessage.classList.add(`warning-fade-in`);

            setTimeout(function () {
                $warningMessage.classList.remove(`warning-fade-in`);
                $warningMessage.classList.add(`warning-fade-out`);
                setTimeout(function () {
                    $warningMessage.classList.remove(`warning-fade-out`);
                    $warningMessage.classList.add(`hidden`);
                }, 500);
            }, 4500);
        }
    };

    const dropItem = () => {
        const getItem13 = document.querySelector(`.iso-item-62`);
        const infoItem13 = getItem13.getBoundingClientRect();
        const numy = infoItem13.top;
        const numx = infoItem13.left;

        console.log(player.x, player.y, numx, numy);

        if (player.x > numx - 60 && player.x < numx + 30 && player.y > numy - 80 && player.y < numy + 10) {
            console.log(`DROPTEST DROP`);
            checkPickup = false;
            const $rover = document.querySelector(`.img13`);
            $rover.setAttribute(`src`, `./assets/img/rover.png`);

            if (checkRover === false) {
                checkRover = true;
            }
        }
    }

    const winnerSlide = () => {
        setTimeout(function () {
            const $overlayFail = document.querySelector(`.overlay-fail`);
            $overlayFail.classList.remove(`hidden`);
            $overlayFail.classList.add(`animate-overlay-fail`);
            $overlayFail.innerHTML = `<div class="fail-message-complete">
            <p class="fail-message white-text">You Solved all the problems!</p>
            <p class="sub-fail-message white-text">Congratulations! You fixed every single problem on Mars. The Mars-mission can continue once more. Thank you!</p>
        </div><div class="robot-complete">
                <div class="eyes" id="eyes">
                    <div class="surround-eyes">
                        <div class="overflow-eyes">
                            <div class="shadow-color-eye">
                                <div class="color-eye__red"></div>
                                <div class="color-eye__blue"></div>
                                <div class="eye"></div>
                            </div>
                        </div>
                    </div>
                    <div class="surround-eyes">
                        <div class="shadow-color-eye">
                            <div class="color-eye__red"></div>
                            <div class="color-eye__blue"></div>
                            <div class="eye"></div>
                        </div>
                    </div>
                </div>
                <div class="all__mouth">
                    <div class="mouth-neutral"></div>
                    <div class="mouth-happy mouth-happy2">
                        <div class="line__mouth-happy"></div>
                        <div class="extend__mouth-happy"></div>
                        <div class="circle__mouth-happy"></div>
                    </div>
                </div>
            </div>`;
        }, 1000);

        const $canvas = document.querySelector(`.canvas-three`);
        $canvas.classList.add(`highest-z`);
    }

    const moveRover = () => {
        if (checkRover === true) {
            if (checkBothPanels.length === 2) {
                const $rover = document.querySelector(`.img13`);
                $rover.classList.add(`move-rover`);
                checkRover = `end`;

                /*-------------- bagde appear --------------*/

                const $clickebleItems = document.querySelector(`.clickeble-items`);
                $clickebleItems.innerHTML = `<img class="draw-img badge transparancy" src="./assets/img/badge.png" alt="badge" width="24" height="29">`;

                setTimeout(function () {
                    const $badge = document.querySelector(`.badge`);
                    const getItem10 = document.querySelector(`.iso-item-82`);

                    const infoItem10 = getItem10.getBoundingClientRect();
                    $badge.style.top = `${infoItem10.top - ($badge.height - infoItem10.height) - 20}px`;
                    $badge.style.left = `${infoItem10.left - ($badge.width / 2) + (infoItem10.width / 2)}px`;

                    $badge.classList.remove(`transparancy`);
                    $badge.classList.add(`show-ductape`);

                    winnerSlide();
                }, 4000);
            }
        } else {
            console.log(`win`);
        }
    };

    if (annyang) {
        console.log(`annyang active`);
        // Let's define our first command. First the text we expect, and then the function it should call
        const commands = {
            'Drone': () => {
                $checkUserFlow.classList.add(`userflow-drone`);
                if (document.querySelector(`.userflow-ductape`)) {
                    checkExtDrone = true;
                    if (checkDrone === true) {
                        console.log(player.y);
                        setInterval(animateDrone, 10);
                        function animateDrone() {
                            if (player.y < 20) {
                                player.y++;
                            }
                        }
                        checkDrone = false;
                        console.log(checkDrone);
                        setInterval(update, 10);
                        function update() {
                            clearCanvas();
                            showdrone();
                            move();
                            createWindDust();
                        }
                    }
                    getDrone();
                } else {
                    const $overlayFail = document.querySelector(`.overlay-fail`);
                    $overlayFail.classList.remove(`hidden`);
                    $overlayFail.classList.add(`animate-overlay-fail`);
                }

            },
            'Wind': () => {
                if (checkExtDrone) {
                    blowWindDust();
                } else {
                    console.log(`jess`);
                }
            },
            'Take': () => {
                if (checkExtDrone) {
                    pickItem();
                } else {
                    console.log(`jess oke`);
                }
            },
            'Drop': () => {
                if (checkExtDrone) {
                    dropItem();
                } else {
                    console.log(`jess oke drop`);
                }
            },
            'Mars': () => {
                moveRover();
            }
        };

        // Add our commands to annyang
        annyang.addCommands(commands);
        console.log(commands);

        // Start listening. You can call this here, or attach this call to an event, button, etc.
        annyang.start();
    }

    const getDroneFunctions = () => {
        const $commands = document.querySelector(`.commands`);
        if (droneCommandCheck === true) {
            $commands.innerHTML = `<div class="center-item-title"><p class="item-bag-title"> DRONE COMMANDS</p></div>
             <p class="name__single-item smcommand">"WIND" = gust of wind</p>
            <p class="name__single-item smcommand">"TAKE" = pick up an item</p>
            <p class="name__single-item smcommand">"DROP" = drop an item</p>`;
            droneCommandCheck = false;
        } else {
            $commands.innerHTML = `<div class="center-item-title"><p class="item-bag-title">DRONE COMMANDS</p></div>`;
            droneCommandCheck = true;
        }
    }

    const getPhoneFunctions = () => {
        const $commands = document.querySelector(`.commands`);
        if (phoneCommandCheck === true) {
            $commands.innerHTML = `<div class="center-item-title"><p class="item-bag-title">MESSAGES</p></div>
            <p class="name__single-item smcommand red-message">NEW</p>
            <p class="name__single-item smcommand">"INCOMMING MESSAGE" --> </p>
            <p class="name__single-item smcommand">If the rover is fixed, say 'MARS'</p>`;
            phoneCommandCheck = false;
        } else {
            $commands.innerHTML = `<div class="center-item-title"><p class="item-bag-title">MESSAGES</p></div>`;
            phoneCommandCheck = true;
        }
    }

    const init = () => {
        $canvas.width = window.innerWidth;
        $canvas.height = window.innerHeight;
        window.addEventListener(`resize`, event => resize(event));

        const droneClickMenu = () => {
            if (document.querySelector(`.clickeble-drone`)) {
                const getClickebleDrone = document.querySelector(`.clickeble-drone`);
                getClickebleDrone.addEventListener(`click`, getDroneFunctions);
            }
            requestAnimationFrame(droneClickMenu);
        }

        const phoneClickMenu = () => {
            if (document.querySelector(`.clickeble-phone`)) {
                if (document.querySelector(`.rm-check`)) {
                    const getClickebleDrone = document.querySelector(`.clickeble-phone`);
                    getClickebleDrone.addEventListener(`click`, getPhoneFunctions);
                }
            }
            requestAnimationFrame(phoneClickMenu);
        }

        droneClickMenu();
        phoneClickMenu();

    }

    init();
}