const windowInnerWidth = window.innerWidth;
const windowInnerHeight = window.innerHeight;
console.log(windowInnerHeight);
console.log(windowInnerWidth);

var videoSources = {
    desktop: '/static/videos/flp.mp4',
    phone: '/static/videos/fph.mp4',
    blink: '/static/videos/fblink.mp4'
};

var audioSources = {
    audio: '/static/videos/bau.mp3'
};
window.addEventListener('DOMContentLoaded', function () {
    var videoElement = document.getElementById('dynamic_video');
    var audioElement = document.getElementById('audio');
    // var videoElement2 = document.getElementById('dynamic_video2');


    function setVideoSource() {
        var sourceURL;
        if (windowInnerWidth <= 1000) {
            sourceURL = videoSources.phone;
            videoElement.src = sourceURL;
            videoElement.loop = true;

        } else {
            sourceURL = videoSources.desktop;
            videoElement.src = sourceURL;

            videoElement.addEventListener('ended', function () {
                sourceURL = videoSources.blink;
                videoElement.src = sourceURL;
                videoElement.loop = true;
                // videoElement.currentTime = 0;
                // videoElement.play()
            });
        }


        audioElement.autoplay = true;
        audioElement.loop = true;

        videoElement.autoplay = true;
        videoElement.muted = true;

    }

    setVideoSource();

    let test_sound = new Audio('audio');
    test_sound.play();
    test_sound.controls();
    console.log(test_sound);


    window.addEventListener('load', setVideoSource);
    window.addEventListener('resize', setVideoSource);
});