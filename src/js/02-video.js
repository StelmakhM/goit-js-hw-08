import Player from '@vimeo/player';
import throttle from 'lodash.throttle';


const iframe = document.querySelector('iframe');
const player = new Player(iframe);
const STORAGE_TIME_DATA = 'videoplayer-current-time';
const timeFromStorage = localStorage.getItem(STORAGE_TIME_DATA)


player.on('timeupdate', throttle(saveCurrentTime, 1000));
player.setCurrentTime(timeFromStorage);


function saveCurrentTime(time) {
    const currentTime = time.seconds;
    localStorage.setItem(STORAGE_TIME_DATA, currentTime);
}


