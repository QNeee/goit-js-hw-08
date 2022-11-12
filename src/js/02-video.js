import throttle from 'lodash.throttle';
import '../css/common.css';
import Player from '@vimeo/player';
const iframe = document.querySelector("iframe");
const player = new Player(iframe);
const TIME_KEY = "videoplayer-current-time";
const onPlay = function (d) {
    const strigifyData = JSON.stringify(d);
    localStorage.setItem(TIME_KEY, strigifyData);
};
function resumePlay() {
    if (JSON.parse(localStorage.getItem(TIME_KEY)) === null) {
        return;
    }
    const paused = JSON.parse(localStorage.getItem(TIME_KEY))['seconds'];
    if (paused) {
        player.setCurrentTime(paused).then(function (seconds) {
            // seconds = the actual time that the player seeked to
        }).catch(function (error) {
            switch (error.name) {
                case 'RangeError':
                    // the time was less than 0 or greater than the video’s duration
                    break;

                default:
                    // some other error occurred
                    break;
            }
        });
    }
}

player.on('timeupdate', throttle(onPlay, 1000));
resumePlay();
