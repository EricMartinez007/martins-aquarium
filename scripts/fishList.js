import { database } from './aquariumData.js';

export const fishList = () => {
    // Generate an HTML representation of each fish
    let fishHTML = '';
    for (const fish of database.fish) {
        fishHTML += `
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
    return fishHTML;
};

export const renderFishList = (fishHTML) => {
    const fishList = document.getElementById('fishList');

    if (fishList) {
        fishList.innerHTML = fishHTML;
    } else {
        console.error('Element with id "fishList" not found in the DOM.');
    }
};