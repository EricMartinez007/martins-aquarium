import { database } from './aquariumData.js';

export const locationList = () => {
    // Generate an HTML representation of each location
    let locationHTML = '';   
    for (const location of database.locations) {
        locationHTML += `
            <article class="locations">
                <section class="location">${location.name}
                    <li class="country">${location.country}</li>
                    <li class="description">${location.description}</li>
                </section>
            </article>
`;
    }   
    return locationHTML; 
};

export const renderLocationList = (locationHTML) => {
    const locationList = document.getElementById('locationList'); 
    
    if (locationList) {
        locationList.innerHTML = locationHTML;
    } else {
        console.error('Element with id "tipList" not found in the DOM.');
    }
};  