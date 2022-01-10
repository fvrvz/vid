const videoSrc = document.querySelector('source');
const btn = document.querySelector('button');

const video = document.querySelector('video');

btn.addEventListener('click', () => {
    console.log(videoSrc.src);
    // if(videoSrc.src == '../tajmahal-1.mp4') {
        videoSrc.setAttribute('src', '../tajmahal-2.mp4');
        video.pause();
        
    // }
    // else {
    //     videoSrc.src = '../tajmahal-1.mp4';
    // }
    console.log(videoSrc.src);
});