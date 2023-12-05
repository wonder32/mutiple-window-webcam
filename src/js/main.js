import {populateWebcam} from "./modules/webcam";
import {setScreenDetails, removeOld, removeScreen} from "./modules/screen";
import {displayStats} from "./modules/stats";
import {position} from "./modules/position";

const video = document.querySelector('video');
const clear = document.querySelector('.clear');
const path = document.querySelector('svg path');

function restart() {
    console.log(timers);
    timers.forEach((timer) => window.clearInterval(timer));
    window.localStorage.clear();
    setTimeout(() => window.location.reload(), Math.random() * 1000);
}




const timers = [];

function go() {
    timers.push(setInterval(setScreenDetails, 10));
    timers.push(setInterval(displayStats, 10));
    timers.push(setInterval(removeOld, 100));
    timers.push(setInterval(position, 100, video, path));
}

clear.addEventListener('click', restart);
window.addEventListener('beforeunload', removeScreen);

go();



populateWebcam(video);
