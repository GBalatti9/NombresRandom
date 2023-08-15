import { names } from "./data.js";

window.onload = () => {

    // const numRows = 15; // Número de filas
    // const numCols = 15; // Número de columnas

    // const totalStars = numRows * numCols; // Cantidad total de estrellas

    // const starsContainer = document.querySelector('.stars');

    // for (let i = 0; i < totalStars; i++) {
    //     const star = document.createElement('div');
    //     star.classList.add('star');
    //     starsContainer.appendChild(star);
    // }

    // let inputNames = ["Amame", "Gozame", "Damela Lucas"];
    const nameContainer = document.querySelector(".name-container");

    let firstNames = names.firstNames;
    let lastNames = names.lastNames;

    const container = document.getElementById("container");
    const inputBtn = document.getElementById("button");


    let indexFN = 0;
    let indexLN = 0;
    // let indexNames = 0;

    inputBtn.addEventListener("click", (e) => {

        indexFN = Math.floor(Math.random() * firstNames.length);
        indexLN = Math.floor(Math.random() * lastNames.length);
        // indexNames = Math.floor(Math.random() * inputNames.length);
        // inputBtn.value = inputNames[indexNames];

        const h3 = document.createElement("h3");
        h3.textContent = `${firstNames[indexFN]} ${lastNames[indexLN]}`.toUpperCase();
        h3.classList.add("name-color");
        h3.style.fontFamily = "arial"
        const nameContainer = document.querySelector('.name-container');
        nameContainer.style.boxShadow = "1px 1px 5px black"
        const existingH3 = container.querySelector("h3");

        if (existingH3) {
            nameContainer.removeChild(existingH3);
        }

        nameContainer.appendChild(h3);
    });

    function createCloud() {
        const cloud = document.createElement('div');
        cloud.classList.add('cloud');
        container.appendChild(cloud);
        return cloud;
    }

    function getRandomTop() {
        return Math.random() * 700;
    }
    function getRandomAnimationDirection() {
        return Math.random() < 0.5 ? 'left' : 'right';
    }

    console.log(getRandomAnimationDirection());

    const setInitialPosition = (cloud, direction) => {
        if(direction === 'right'){
            cloud.style.animation = 'moveCloudRightToLeft 100s linear infinite'
        } else {
            cloud.style.animation = 'moveCloudLeftToRight 80s linear infinite'
        }

        cloud.style.top = `${getRandomTop()}px`
    }

    for (let i = 0; i < 10; i++) {
        const cloud = createCloud();
        const direction = getRandomAnimationDirection();
        setInitialPosition(cloud, direction);
    }
}