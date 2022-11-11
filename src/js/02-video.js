import '../css/common.css';
import Player from '@vimeo/player';
const iframe = document.querySelector("iframe");
const player = new Player(iframe);
const time = "videoplayer-current-time";
const onReloadPage = (e) => {
    if (location.reload) {
        onpause;
    }
    const onPlay = data => {

        onpause: () => window.addEventListener("player.pause", onReloadPage);

    };
}

