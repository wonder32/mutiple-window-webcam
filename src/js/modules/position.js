
import {PathMe} from "./PathMe";
import {getScreens} from "./screen";

export {position};

const svg = document.querySelector('svg');

function position(video, path) {
    const screenPath = new PathMe();
    // Set the SVG viewBox using the screen size
    svg.setAttribute('viewBox', `0 0 ${window.screen.availWidth} ${window.screen.availHeight}`);
    svg.setAttribute('width', `${window.screen.availWidth}px`);
    svg.setAttribute('height', `${window.screen.availHeight}px`);
    // OFfset it by the window position
    svg.setAttribute('style', `transform: translate(-${window.screenX}px, -${window.screenY}px)`);
    // Also apply to video
    video.setAttribute('style', `transform: translate(-${window.screenX}px, -${window.screenY}px)`);
    const screens = getScreens();
    screens
        .map(([key, screen]) => {
            const x = screen.screenX + screen.width / 2;
            const y = screen.screenY + screen.height / 2;
            return [key, { ...screen, x, y }];
        })
        .forEach(([key, screen], i) => {
            if (i === 0) {
                screenPath.moveTo(screen.x, screen.y);
            } else {
                screenPath.lineTo(screen.x, screen.y);
            }
            // if (i === screens.length - 1) {
            // screenPath.lineTo(screens[0][1].x, screens[0][1].y);
            // }
        });

    screenPath.closePath();
    path.setAttribute('d', screenPath.toString());
}
