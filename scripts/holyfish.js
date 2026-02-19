import { database } from './aquariumData.js';

export const mostHolyFish = () => {
    // 3, 6, 9, 12, etc... fish
    let holyFish = ``;

    for (const fish of database.fish) {
        if (fish.length % 3 === 0) {
            holyFish += `
                <article class="fish-card"> 
                    <img src="${fish.image}" alt="${fish.name}" class="fish__image">
                    <div class="fish-details">
                        <h2>${fish.name}</h2>
                        <p>Species: ${fish.species}</p>
                        <p>Length: ${fish.length} inches</p>
                        <p>Location: ${fish.location}</p>
                        <p>Diet: ${fish.diet}</p>
                    </div>
                </article>
            `;
        }
    }

    return holyFish
}

export const soldierFish = () => {
    // 5, 10, 15, 20, 25, etc... fish
    let soldierFish = ``;

    for (const fish of database.fish) {
        if (fish.length % 5 === 0) {
            soldierFish += `
                <article class="fish-card">
                    <img src="${fish.image}" alt="${fish.name}" class="fish__image">
                    <div class="fish-details">
                        <h2>${fish.name}</h2>
                        <p>Species: ${fish.species}</p>
                        <p>Length: ${fish.length} inches</p>
                        <p>Location: ${fish.location}</p>
                        <p>Diet: ${fish.diet}</p>
                    </div>
                </article>
            `;
        }
    }

    return soldierFish;
}

export const regularFish = () => {
    // Any fish not a multiple of 3 or 5
    let regularFish = ``;

    for (const fish of database.fish) {
        if (fish.length % 3 !== 0 && fish.length % 5 !== 0) {
            regularFish += `
                <article class="fish-card">
                    <img src="${fish.image}" alt="${fish.name}" class="fish__image">
                    <div class="fish-details">
                        <h2>${fish.name}</h2>
                        <p>Species: ${fish.species}</p>
                        <p>Length: ${fish.length} inches</p>
                        <p>Location: ${fish.location}</p>
                        <p>Diet: ${fish.diet}</p>
                    </div>
                </article>
            `;
        }
    }

    return regularFish;
}

export const renderHolyList = (holyFishHTML, soldierFishHTML, regularFishHTML) => {
    const fishList = document.getElementById('fishList');

    if (fishList) {
        fishList.innerHTML = holyFishHTML + soldierFishHTML + regularFishHTML;
    } else {
        console.error('Element with id "fishList" not found in the DOM.');
    }
};