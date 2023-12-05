

export {setScreenDetails, removeOld, getScreens, removeScreen};
function getScreenId() {
    const existingScreens = Object.keys(window.localStorage)
        .filter((key) => key.startsWith('screen-'))
        .map((key) => parseInt(key.replace('screen-', '')))
        .sort((a, b) => a - b);
    return existingScreens.at(-1) + 1 || 1;
}

const screenId = `screen-${getScreenId()}`;


function getScreens() {
    return Object.entries(window.localStorage)
        .filter(([key]) => key.startsWith('screen-'))
        .map(([key, value]) => [key, JSON.parse(value)]);
}

function setScreenDetails() {
    const windowDetails = {
        screenX: window.screenX,
        screenY: window.screenY,
        screenWidth: window.screen.availWidth,
        screenHeight: window.screen.availHeight,
        width: window.outerWidth,
        height: window.innerHeight,
        updated: Date.now(),
    };

    window.localStorage.setItem(screenId, JSON.stringify(windowDetails));
    // console.log(windowDetails);

}

function removeOld() {
    const screens = getScreens();
    for (const [key, screen] of screens) {
        if (Date.now() - screen.updated > 1000) {
            localStorage.removeItem(key);
        }
    }
}

function removeScreen() {
    console.log(`removing screen ${screenId}`);
    localStorage.removeItem(screenId);
}
