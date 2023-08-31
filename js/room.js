{
    const createImages = () => {
        const $createImages = document.querySelector(`.create-images`);
        const img0 = `<img class="draw-img img0" src="./assets/img/cabinonenew.png" alt="test" width="230" height="179">`;
        const img1 = `<img class="draw-img img1" src="./assets/img/raket2.png" alt="rocket" width="230" height="293">`;
        const img2 = `<img class="draw-img img2" src="./assets/img/box.png" alt="boxes" width="115" height="82">`;
        const img3 = `<img class="draw-img img3" src="./assets/img/cabintwonew.png" alt="space cabin" width="230" height="180">`;
        const img4 = `<img class="draw-img img4" src="./assets/img/meteor.png" alt="meteor" width="230" height="164">`;
        const img5 = `<img class="draw-img img5" src="./assets/img/solarpansand.png" alt="solar pannel" width="115" height="82">`;
        const img6 = `<img class="draw-img img6" src="./assets/img/meteorsmall.png" alt="small meteor" width="115" height="82">`;
        const img7 = `<img class="draw-img img7" src="./assets/img/meteorsmall.png" alt="small meteor" width="115" height="82">`;
        const img8 = `<img class="draw-img img8" src="./assets/img/solarpansand.png" alt="solar pannel" width="115" height="82">`;
        const img9 = `<img class="draw-img img9" src="./assets/img/mast.png" alt="zendmast" width="115" height="184">`;
        const img10 = `<img class="draw-img img10" src="./assets/img/sandpile.png" alt="pile of sand" width="115" height="82">`;
        const img11 = `<img class="draw-img img11" src="./assets/img/sandpile.png" alt="pile of sand" width="115" height="82">`;
        const img12 = `<img class="draw-img img12" src="./assets/img/sandpile.png" alt="pile of sand" width="115" height="82">`;
        const img13 = `<img class="draw-img img13" src="./assets/img/rovernowheel.png" alt="rover" width="115" height="82">`;
        const img14 = `<img class="draw-img img14" src="./assets/img/sandpile.png" alt="pile of sand" width="115" height="82">`;
        const img15 = `<img class="draw-img img15" src="./assets/img/box.png" alt="boxes" width="115" height="82">`;

        $createImages.innerHTML += img11;
        $createImages.innerHTML += img6;
        $createImages.innerHTML += img7;
        $createImages.innerHTML += img9;
        $createImages.innerHTML += img0;
        $createImages.innerHTML += img1;
        $createImages.innerHTML += img2;
        $createImages.innerHTML += img3;
        $createImages.innerHTML += img4;
        $createImages.innerHTML += img5;
        $createImages.innerHTML += img8;
        $createImages.innerHTML += img10;
        $createImages.innerHTML += img12;
        $createImages.innerHTML += img13;
        $createImages.innerHTML += img14;
        $createImages.innerHTML += img15;
    }

    const createGridItems = () => {
        const $grid = document.querySelector(`.isometric-grid`);
        for (let i = 0; i < 100; i++) {
            $grid.innerHTML += `<div class="iso-item iso-item-${i}"></div>`;
        }
    }

    const getLocations = () => {

        /* -- Mast --*/

        const getItem9 = document.querySelector(`.iso-item-13`);
        const getImg9 = document.querySelector(`.img9`);

        const infoItem9 = getItem9.getBoundingClientRect();
        getImg9.style.top = `${infoItem9.top - (getImg9.height - infoItem9.height)}px`;
        getImg9.style.left = `${infoItem9.left - (getImg9.width / 2) + (infoItem9.width / 2)}px`;

        /* -- Cabinonenew --*/

        const getItem0 = document.querySelector(`.iso-item-21`);
        const getImg0 = document.querySelector(`.img0`);

        const infoItem0 = getItem0.getBoundingClientRect();
        getImg0.style.top = `${infoItem0.top - (getImg0.height - infoItem0.height)}px`;
        getImg0.style.left = `${infoItem0.left - (getImg0.width / 2) + (infoItem0.width / 2)}px`;

        /* -- Rocket --*/

        const getItem1 = document.querySelector(`.iso-item-65`);
        const getImg1 = document.querySelector(`.img1`);

        const infoItem1 = getItem1.getBoundingClientRect();
        getImg1.style.top = `${infoItem1.top - (getImg1.height - infoItem1.height)}px`;
        getImg1.style.left = `${infoItem1.left - (getImg1.width / 2) + (infoItem1.width / 2)}px`;

        /* -- Box --*/

        const getItem2 = document.querySelector(`.iso-item-25`);
        const getImg2 = document.querySelector(`.img2`);

        const infoItem2 = getItem2.getBoundingClientRect();
        getImg2.style.top = `${infoItem2.top - (getImg2.height - infoItem2.height)}px`;
        getImg2.style.left = `${infoItem2.left - (getImg2.width / 2) + (infoItem2.width / 2)}px`;

        /* -- Box 2--*/

        const getItem15 = document.querySelector(`.iso-item-44`);
        const getImg15 = document.querySelector(`.img15`);

        const infoItem15 = getItem15.getBoundingClientRect();
        getImg15.style.top = `${infoItem15.top - (getImg15.height - infoItem15.height)}px`;
        getImg15.style.left = `${infoItem15.left - (getImg15.width / 2) + (infoItem15.width / 2)}px`;

        /* -- Cabintwo --*/

        const getItem3 = document.querySelector(`.iso-item-41`);
        const getImg3 = document.querySelector(`.img3`);

        const infoItem3 = getItem3.getBoundingClientRect();
        getImg3.style.top = `${infoItem3.top - (getImg3.height - infoItem3.height)}px`;
        getImg3.style.left = `${infoItem3.left - (getImg3.width / 2) + (infoItem3.width / 2)}px`;

        /* -- Meteor --*/

        const getItem4 = document.querySelector(`.iso-item-87`);
        const getImg4 = document.querySelector(`.img4`);

        const infoItem4 = getItem4.getBoundingClientRect();
        getImg4.style.top = `${infoItem4.top - (getImg4.height - infoItem4.height)}px`;
        getImg4.style.left = `${infoItem4.left - (getImg4.width / 2) + (infoItem4.width / 2)}px`;

        /* -- Solar pannel --*/

        const getItem5 = document.querySelector(`.iso-item-17`);
        const getImg5 = document.querySelector(`.img5`);

        const infoItem5 = getItem5.getBoundingClientRect();
        getImg5.style.top = `${infoItem5.top - (getImg5.height - infoItem5.height)}px`;
        getImg5.style.left = `${infoItem5.left - (getImg5.width / 2) + (infoItem5.width / 2)}px`;

        /* -- Solar pannel --*/

        const getItem8 = document.querySelector(`.iso-item-28`);
        const getImg8 = document.querySelector(`.img8`);

        const infoItem8 = getItem8.getBoundingClientRect();
        getImg8.style.top = `${infoItem8.top - (getImg8.height - infoItem8.height)}px`;
        getImg8.style.left = `${infoItem8.left - (getImg8.width / 2) + (infoItem8.width / 2)}px`;

        /* -- Small meteor --*/

        const getItem6 = document.querySelector(`.iso-item-51`);
        const getImg6 = document.querySelector(`.img6`);

        const infoItem6 = getItem6.getBoundingClientRect();
        getImg6.style.top = `${infoItem6.top - (getImg6.height - infoItem6.height)}px`;
        getImg6.style.left = `${infoItem6.left - (getImg6.width / 2) + (infoItem6.width / 2)}px`;

        /* -- Small meteor 2 --*/

        const getItem7 = document.querySelector(`.iso-item-5`);
        const getImg7 = document.querySelector(`.img7`);

        const infoItem7 = getItem7.getBoundingClientRect();
        getImg7.style.top = `${infoItem7.top - (getImg7.height - infoItem7.height)}px`;
        getImg7.style.left = `${infoItem7.left - (getImg7.width / 2) + (infoItem7.width / 2)}px`;

        /* -- Sand pile 1 --*/

        const getItem10 = document.querySelector(`.iso-item-82`);
        const getImg10 = document.querySelector(`.img10`);

        const infoItem10 = getItem10.getBoundingClientRect();
        getImg10.style.top = `${infoItem10.top - (getImg10.height - infoItem10.height)}px`;
        getImg10.style.left = `${infoItem10.left - (getImg10.width / 2) + (infoItem10.width / 2)}px`;

        /* -- Sand pile 2 --*/

        const getItem11 = document.querySelector(`.iso-item-33`);
        const getImg11 = document.querySelector(`.img11`);

        const infoItem11 = getItem11.getBoundingClientRect();
        getImg11.style.top = `${infoItem11.top - (getImg11.height - infoItem11.height)}px`;
        getImg11.style.left = `${infoItem11.left - (getImg11.width / 2) + (infoItem11.width / 2)}px`;

        /* -- Sand pile 3 --*/

        const getItem12 = document.querySelector(`.iso-item-75`);
        const getImg12 = document.querySelector(`.img12`);

        const infoItem12 = getItem12.getBoundingClientRect();
        getImg12.style.top = `${infoItem12.top - (getImg12.height - infoItem12.height)}px`;
        getImg12.style.left = `${infoItem12.left - (getImg12.width / 2) + (infoItem12.width / 2)}px`;

        /* -- Sand pile 4 --*/

        const getItem14 = document.querySelector(`.iso-item-59`);
        const getImg14 = document.querySelector(`.img14`);

        const infoItem14 = getItem14.getBoundingClientRect();
        getImg14.style.top = `${infoItem14.top - (getImg14.height - infoItem14.height)}px`;
        getImg14.style.left = `${infoItem14.left - (getImg14.width / 2) + (infoItem14.width / 2)}px`;

        /* -- Rover --*/

        const getItem13 = document.querySelector(`.iso-item-62`);
        const getImg13 = document.querySelector(`.img13`);

        const infoItem13 = getItem13.getBoundingClientRect();
        getImg13.style.top = `${infoItem13.top - (getImg13.height - infoItem13.height)}px`;
        getImg13.style.left = `${infoItem13.left - (getImg13.width / 2) + (infoItem13.width / 2)}px`;

    }

    const handleClickButton = () => {
        if (document.querySelector(`.div-in`)) {
            const getDivIn = document.querySelector(`.div-in`);
            getDivIn.classList.remove(`div-in`);
            getDivIn.classList.remove(`item-robot-div-in`);
            getDivIn.classList.add(`div-out`);
            getDivIn.classList.add(`item-robot-div-out`);
        }
    }

    const handleClickButtonOut = () => {
        if (document.querySelector(`.div-out`)) {
            console.log(`ja oke`)
            const getDivOut = document.querySelector(`.div-out`);
            getDivOut.classList.remove(`div-out`);
            getDivOut.classList.remove(`item-robot-div-out`);
            getDivOut.classList.add(`div-in`);
            getDivOut.classList.add(`item-robot-div-in`);
        }
        console.log(`dit is een test`);
    }

    const handleClickTipsButton = () => {
        console.log(`hey`);
        if (document.querySelector(`.tip-in`)) {
            const getTipIn = document.querySelector(`.tip-in`);
            getTipIn.classList.remove(`tip-in`);
            getTipIn.classList.remove(`tips_and_tricks-info-in`);
            getTipIn.classList.add(`tip-out`);
            getTipIn.classList.add(`tips_and_tricks-info-out`);
            console.log(`eeeeeeh`);
        } else if (document.querySelector(`.tip-out`)) {
            const getTipOut = document.querySelector(`.tip-out`);
            getTipOut.classList.remove(`tip-out`);
            getTipOut.classList.remove(`tips_and_tricks-info-out`);
            getTipOut.classList.add(`tip-in`);
            getTipOut.classList.add(`tips_and_tricks-info-in`);
            console.log(`eeeeeeh`);
        }
    }

    const closeTipsWindow = () => {
        const getTipIn = document.querySelector(`.tip-in`);
        getTipIn.classList.remove(`tip-in`);
        getTipIn.classList.remove(`tips_and_tricks-info-in`);
        getTipIn.classList.add(`tip-out`);
        getTipIn.classList.add(`tips_and_tricks-info-out`);
        console.log(`eeeeeeh`);
    }

    /*---------------------------------------------------------------------- ITEMS ---------------------------------------------------------------*/

    const placeDuctape = () => {
        const ductape = `<img class="draw-img ductape transparancy" src="./assets/img/ductape2.png" alt="ductape" width="32" height="25">`;
        const getClickebleItems = document.querySelector(`.clickeble-items`);
        getClickebleItems.innerHTML += ductape;
        const getItem8 = document.querySelector(`.iso-item-25`);
        const getImg8 = document.querySelector(`.ductape`);

        const infoItem8 = getItem8.getBoundingClientRect();
        getImg8.style.top = `${infoItem8.top - (getImg8.height - infoItem8.height) - 30}px`;
        getImg8.style.left = `${infoItem8.left - (getImg8.width / 2) + (infoItem8.width / 2) - 20}px`;
    }

    const placePhone = () => {
        const phone = `<img class="draw-img phone transparancy" src="./assets/img/phone-r.png" alt="phone" width="29" height="54">`;
        const getClickebleItems = document.querySelector(`.clickeble-items`);
        getClickebleItems.innerHTML += phone;

        const getItem10 = document.querySelector(`.iso-item-82`);
        const getImg10 = document.querySelector(`.phone`);

        const infoItem10 = getItem10.getBoundingClientRect();
        getImg10.style.top = `${infoItem10.top - (getImg10.height - infoItem10.height) - 20}px`;
        getImg10.style.left = `${infoItem10.left - (getImg10.width / 2) + (infoItem10.width / 2)}px`;
    }

    const placeRoverTransparent = () => {
        const rover = `<img class="draw-img rover transparancy" src="./assets/img/rover.png" alt="rover" width="115" height="82">`;
        const getClickebleItems = document.querySelector(`.clickeble-items`);
        getClickebleItems.innerHTML += rover;

        const getItem13 = document.querySelector(`.iso-item-62`);
        const getImg13 = document.querySelector(`.rover`);

        const infoItem13 = getItem13.getBoundingClientRect();
        getImg13.style.top = `${infoItem13.top - (getImg13.height - infoItem13.height)}px`;
        getImg13.style.left = `${infoItem13.left - (getImg13.width / 2) + (infoItem13.width / 2)}px`;
    }

    const placeAlertMessage = () => {
        const alertMessage = `<img class="draw-img alert-message transparancy" src="./assets/img/ping.png" alt="ping">`;
        const getClickebleItems = document.querySelector(`.alert_new_message`);
        getClickebleItems.innerHTML += alertMessage;

        const getItem10 = document.querySelector(`.iso-item-82`);
        const getAlert = document.querySelector(`.alert-message`);

        const infoItem10 = getItem10.getBoundingClientRect();
        getAlert.style.top = `${infoItem10.top + 20}px`;
        getAlert.style.left = `${infoItem10.left + 25}px`;
        console.log(getAlert, getItem10, infoItem10);
    }

    const placeRoverWheel = () => {
        const roverWheel = `<img class="draw-img rover-wheel transparancy" src="./assets/img/wheel.png" alt="wheel">`;
        const getClickebleItems = document.querySelector(`.clickeble-items`);
        getClickebleItems.innerHTML += roverWheel;

        const getItem14 = document.querySelector(`.iso-item-59`);
        const getImg14 = document.querySelector(`.rover-wheel`);

        const infoItem14 = getItem14.getBoundingClientRect();
        getImg14.style.top = `${infoItem14.top - (getImg14.height - infoItem14.height) - 60}px`;
        getImg14.style.left = `${infoItem14.left - (getImg14.width / 2) + (infoItem14.width / 2) - 20}px`;
    }


    /*--------------------------------------------------------------------------------------------------------------------------------------------*/

    const init = () => {
        createImages();
        createGridItems();
        getLocations();
        placeDuctape();
        placePhone();
        placeRoverTransparent();
        placeAlertMessage();
        placeRoverWheel();

        /*-- move eyes robot --*/

        const balls = document.getElementsByClassName("shadow-color-eye");

        document.onmousemove = function () {
            let x = event.clientX * 50 / window.innerWidth + "%";
            let y = event.clientY * 50 / window.innerHeight + "%";

            //console.log(balls);

            for (let i = 0; i < 2; i++) {
                balls[i].style.left = x;
                balls[i].style.top = y;
            }
        }

        /*---------------------*/

        const arrowButton = document.querySelector(`.arrow__button`);
        arrowButton.addEventListener(`click`, handleClickButton);
        const arrowButtonOut = document.querySelector(`.arrow__button-out`);
        arrowButtonOut.addEventListener(`click`, handleClickButtonOut);

        const tipsButton = document.querySelector(`.tips_and_tricks`);
        tipsButton.addEventListener(`click`, handleClickTipsButton);

        const closeTips = document.querySelector(`.close-tip`);
        closeTips.addEventListener(`click`, closeTipsWindow);

        const $warningMessage = document.querySelector(`.warning-message`);
        $warningMessage.innerHTML = `<p class="tips-tip">Welcome to Mars :)</p>`;
        $warningMessage.classList.remove(`hidden`);
        $warningMessage.classList.add(`warning-fade-in`);

        setTimeout(function () {
            $warningMessage.classList.remove(`warning-fade-in`);
            $warningMessage.classList.add(`warning-fade-out`);
            setTimeout(function () {
                $warningMessage.classList.remove(`warning-fade-out`);
                $warningMessage.classList.add(`hidden`);
            }, 500);
        }, 5000);

        const muteUnmute = () => {
            if (document.querySelector(`.fa-volume-mute`)) {
                const $volume = document.querySelector(`.volume`);
                $volume.classList.remove(`fa-volume-mute`);
                $volume.classList.add(`fa-volume-up`);
                //console.log(`aan`);

                const $spaceSound = document.getElementById(`spacesound`);
                $spaceSound.muted = false;

            } else if (document.querySelector(`.fa-volume-up`)) {
                const $volume = document.querySelector(`.volume`);
                $volume.classList.remove(`fa-volume-up`);
                $volume.classList.add(`fa-volume-mute`);
                //console.log(`uit`);

                const $spaceSound = document.getElementById(`spacesound`);
                $spaceSound.muted = true;

            }

            console.log(`geluid`);
        }

        if (document.querySelector(`.mute-button`)) {
            const muteButton = document.querySelector(`.mute-button`);
            muteButton.addEventListener(`click`, muteUnmute);
        }



    }

    init();
}