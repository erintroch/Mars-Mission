{
    // deze functie voeg een nieuw element toe op het scherm.

    const hacker = [];

    const keyDownNext = (e) => {
        let $typeText = document.querySelector(`.type-text`);
        const typeText1 = $typeText.textContent;
        console.log(typeText1);

        if (e.keyCode == '40' || e.keyCode == '13' || e.keyCode == '32') {

            if (typeText1 === `.....`) {
                const $testwriter = document.querySelector(`.testwriter`);
                $testwriter.innerHTML = `<div class="typewriter2">
            <h1 class="type-text">Oh! I didn't see you there.</h1>
        </div>`;
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
            };
            if (typeText1 === `Oh! I didn't see you there.`) {
                const $testwriter = document.querySelector(`.testwriter`);
                $testwriter.innerHTML = `<div class="typewriter2">
            <h1 class="type-text">You are right on time to help us...</h1>
        </div>`;
                const $blink = document.querySelectorAll(`.shadow-color-eye`);
                console.log($blink);
                $blink.forEach(eye => {
                    eye.innerHTML = `<div class="eye-blinking">
                    <div class="blink__two"></div>
                    <div class="blink__two"></div>
                </div>
                <div class="color-eye__red"></div>
                <div class="color-eye__blue"></div>
                <div class="eye"></div>`;
                })
                const $mouthHappyTwo = document.querySelector(`.mouth-happy2`);
                $mouthHappyTwo.classList.remove(`mouth-happy2`);
                $mouthHappyTwo.classList.add(`mouth-happy3`);
                const $allMouth = document.querySelector(`.all__mouth`);
                $allMouth.classList.add(`higher-mouth`);
            };
            if (typeText1 === `You are right on time to help us...`) {
                const $testwriter = document.querySelector(`.testwriter`);
                $testwriter.innerHTML = `<div class="typewriter2">
            <h1 class="type-text">with the Mars-mission :)</h1>
        </div>`;
            }
            if (typeText1 === `with the Mars-mission :)`) {
                const $testwriter = document.querySelector(`.testwriter`);
                $testwriter.innerHTML = `<div class="typewriter2">
            <h1 class="type-text">Last night, there was a sandstorm.</h1>
        </div>`;
                const $blink = document.querySelectorAll(`.shadow-color-eye`);
                console.log($blink);
                $blink.forEach(eye => {
                    eye.innerHTML = `<div class="eye-blinking">
                    <div class="blink__two"></div>
                    <div class="blink__two"></div>
                </div>
                <div class="color-eye__red"></div>
                <div class="color-eye__blue"></div>
                <div class="eye"></div>`;
                })
                // const $mouthHappyTwo = document.querySelector(`.mouth-happy2`);
                // $mouthHappyTwo.classList.remove(`mouth-happy2`);
                // $mouthHappyTwo.classList.add(`mouth-happy3`);
                const $allMouth = document.querySelector(`.all__mouth`);
                $allMouth.classList.add(`higher-mouth`);
            };
            if (typeText1 === `Last night, there was a sandstorm.`) {
                const $testwriter = document.querySelector(`.testwriter`);
                $testwriter.innerHTML = `<div class="typewriter2">
            <h1 class="type-text">We count on you to fix the problems,</h1>
        </div>`;
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
                $mouthHappy.classList.remove(`mouth-happy3`);
                const $allMouth = document.querySelector(`.all__mouth`);
                $allMouth.classList.remove(`higher-mouth`);
            };
            if (typeText1 === `We count on you to fix the problems,`) {
                const $testwriter = document.querySelector(`.testwriter`);
                $testwriter.innerHTML = `<div class="typewriter2">
            <h1 class="type-text">so the crew can continue to explore Mars.</h1>
        </div>`;
                const $blink = document.querySelectorAll(`.shadow-color-eye`);
                console.log($blink);
                $blink.forEach(eye => {
                    eye.innerHTML = `<div class="eye-blinking">
                    <div class="blink__two"></div>
                    <div class="blink__two"></div>
                </div>
                <div class="color-eye__red"></div>
                <div class="color-eye__blue"></div>
                <div class="eye"></div>`;
                })
                const $mouthHappyTwo = document.querySelector(`.mouth-happy2`);
                $mouthHappyTwo.classList.remove(`mouth-happy2`);
                $mouthHappyTwo.classList.add(`mouth-happy3`);
                const $allMouth = document.querySelector(`.all__mouth`);
                $allMouth.classList.add(`higher-mouth`);

                const $GoToMarsButton = document.querySelector(`.cta-help-href`);
                $GoToMarsButton.classList.remove(`hidden`);
                $GoToMarsButton.classList.add(`animate-overlay-fail`);

            };
        }
    }

    const addDelay = () => {
        console.log(`wait 1sec`);

        const $switchOverlay = document.querySelector(`.switch-overlay`);
        $switchOverlay.classList.remove(`hidden`);
        $switchOverlay.classList.add(`fade-in__switch`);

        setTimeout(function () {
            window.location = `room.html`;
        }, 1500);
    }

    const init = () => {

        document.addEventListener('keydown', keyDownNext);

        const soundTrack = document.querySelector(`audio`);
        document.onkeydown = function () {
            soundTrack.volume = 0.1;
            soundTrack.play();
        };

        // ------------------------------

        const $GoToMarsButton = document.querySelector(`.cta-help-href`);
        $GoToMarsButton.addEventListener(`click`, addDelay);

        // ------------------------------

        let balls = document.getElementsByClassName("shadow-color-eye");

        document.onmousemove = function () {
            let x = event.clientX * 100 / window.innerWidth + "%";
            let y = event.clientY * 50 / window.innerHeight + "%";

            //console.log(balls);

            for (let i = 0; i < 2; i++) {
                balls[i].style.left = x;
                balls[i].style.top = y;
            }
        }

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
        }

    };

    init();
}