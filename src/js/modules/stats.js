
import {getScreens} from "./screen";

export {displayStats};

const stats = document.querySelector('.stats');

function displayStats() {
    if (!stats) return;
    const existingScreens = Object.fromEntries(getScreens());
    stats.innerHTML = JSON.stringify(existingScreens, null, ' ');
}
