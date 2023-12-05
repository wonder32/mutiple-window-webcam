
export {populateWebcam};

function populateWebcam(video) {
    navigator.mediaDevices.getUserMedia({ video: true }).then((stream) => {
        if (!video) return;
        //video.width = window.screen.availWidth;
        video.height = window.screen.availHeight;
        video.srcObject = stream;
        video.play();
    });
}
