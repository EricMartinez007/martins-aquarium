import { fishList, renderFishList } from './fishList.js';
import { tipList, renderTipList } from './tipList.js';
import { locationList, renderLocationList } from './locationList.js';
import { mostHolyFish, soldierFish, regularFish, renderHolyList } from './holyfish.js';

// Generate the fish list
// const fishHTML = fishList();
// renderFishList(fishHTML);
const holyFishHTML = mostHolyFish();
const soldierFishHTML = soldierFish();
const regularFishHTML = regularFish();
renderHolyList(holyFishHTML, soldierFishHTML, regularFishHTML);
// Generate the care tips
const tipHTML = tipList();
renderTipList(tipHTML);
// Generate the location list
const locationHTML = locationList();
renderLocationList(locationHTML);
// Render each HTML string to the correct DOM element