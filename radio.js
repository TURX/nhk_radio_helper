// audio source: https://www.nhk.or.jp/radio/config/config_web.xml

var ranHlsLoaded = false, hls = new Hls();

function livePlay(url) {
    if(Hls.isSupported()) {
        var hls = new Hls();
        var audio = document.getElementById('audioElement');
        hls.loadSource(url);
        hls.attachMedia(audio);
        audio.play();
    }
}

function playTokyo1() {
    livePlay("https://nhkradioakr1-i.akamaihd.net/hls/live/511633/1-r1/1-r1-01.m3u8");
}

function playTokyo2() {
    livePlay("https://nhkradioakr2-i.akamaihd.net/hls/live/511929/1-r2/1-r2-01.m3u8");
}

function playTokyoFM() {
    livePlay("https://nhkradioakfm-i.akamaihd.net/hls/live/512290/1-fm/1-fm-01.m3u8");
}