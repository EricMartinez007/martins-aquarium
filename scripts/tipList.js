import { database } from './aquariumData.js';

export const tipList = () => {
    // Generate an HTML representation of each care tip
    let tipHTML = '';
    for (const tip of database.tips) {
        tipHTML += `
            <article class="tip-card">
            <li class="tip">${tip.topic}:
                <ul class="tips">${tip.content}</ul>
            </li>
`;
    }   
    return tipHTML; 
};

export const renderTipList = (tipHTML) => {
    const tipList = document.getElementById('tipList'); 
    
    if (tipList) {
        tipList.innerHTML = tipHTML;
    } else {
        console.error('Element with id "tipList" not found in the DOM.');
    }
};  