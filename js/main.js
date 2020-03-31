


// video 
// ---------------------------------------------------------
// video pop up
//----------------------------------------------------------
var popUp = document.querySelector('.pop-up');
var videoBtn = document.querySelector('.left-btn-mv');
var closeBtn = document.querySelector('.close-btn');
var video = document.querySelector('.video-movie');
var pauseBtn = document.querySelector('.pause-btn');
var bar = document.querySelector('.bar');
//var durationVideo = document.querySelector('.duration-video');
var volumeChange = document.querySelector('.volume');
var timeVideo = document.querySelector('.time');
var timeAll = document.querySelector('.time-all');
var fasterBtn = document.querySelector('.faster-button');
var slowBtn = document.querySelector('.slow-button');


function videoOpen() {
  popUp.classList.add('pop-up-on');
  video.play();
  video.volume = 1.0;

};

// video close

function closeVideo() {
  popUp.classList.remove('pop-up-on');
  video.pause();
};

// custom controls for video
function pausePlay() {
  if (video.paused == true) {
    video.play();
    video.playbackRate = 1;
    pauseBtn.innerHTML = 'Pause';
  } else {
    video.pause();
    pauseBtn.innerHTML = 'Play';
  }
};

function barMoving() {
  video.currentTime = video.duration * bar.value / bar.max;
};

function videoMoveSlider() {
    bar.value = video.currentTime / video.duration * bar.max;
    timeVideo.innerHTML = '0:' + Math.round(video.currentTime);
    timeAll.innerHTML = ' 0:' +  Math.floor(video.duration);

}

function volumeWorking() {
  video.volume = volumeChange.value / volumeChange.max;
}

function fasterPlay() {
  video.playbackRate = 3;
  video.play();
}

function slowPlay() {
  video.playbackRate = 0.5;
  video.play();
}

videoBtn.addEventListener('click', videoOpen);
closeBtn.addEventListener('click', closeVideo);
pauseBtn.addEventListener('click', pausePlay);
bar.addEventListener('change', barMoving);
video.addEventListener('timeupdate', videoMoveSlider);
volumeChange.addEventListener('change', volumeWorking);
fasterBtn.addEventListener('click', fasterPlay);
slowBtn.addEventListener('click', slowPlay);

// --------------------------------------------------------------
// Subtitles MOVIE
//---------------------------------------------------------------

var subtitles = document.getElementById('subtitles');

var subt = video.textTracks[0];
subt.mode = 'hidden';



function subtitlesOn(){
  subt.mode = 'showing';
}

subtitles.addEventListener('click', subtitlesOn);

//-----------------------------------------------------------
// TV

var popUpTv = document.querySelector('.pop-up2');
var videoBtnTv = document.querySelector('.left-btn-tv');
var closeBtnTv = document.querySelector('.close-btn2');
var videoTv = document.querySelector('.video-tv');
var pauseBtnTv = document.querySelector('.pause-btn2');
var barTv = document.querySelector('.bar2');
var durationVideo = document.querySelector('.duration-video');
var volumeChangeTv = document.querySelector('.volume2');
var timeTv = document.querySelector('.time2');
var timeAllTv = document.querySelector('.time-all2');
var fasterBtnTv = document.querySelector('.faster-button2');
var slowBtnTv = document.querySelector('.slow-button2');


function videoOpenTv() {
  popUpTv.classList.add('pop-up-on2');
  videoTv.play();
  videoTv.volume = 1.0;

};

// video close

function closeVideoTv() {
  popUpTv.classList.remove('pop-up-on2');
  videoTv.pause();
};

// custom controls for video
function pausePlayTv() {
  if (videoTv.paused == true) {
    videoTv.play();
    videoTv.playbackRate = 1;
    pauseBtnTv.innerHTML = 'Pause';
  } else {
    videoTv.pause();
    pauseBtnTv.innerHTML = 'Play';
  }
};

function barMovingTv() {
  videoTv.currentTime = videoTv.duration * barTv.value / barTv.max;
};

function videoMoveSliderTv() {
    barTv.value = videoTv.currentTime / videoTv.duration * barTv.max;
    timeTv.innerHTML = '0:' + Math.round(videoTv.currentTime);
    timeAllTv.innerHTML = ' 0:' +  Math.floor(videoTv.duration);

};

function volumeWorkingTv() {
  videoTv.volume = volumeChangeTv.value / volumeChangeTv.max;
};

function fasterPlayTv() {
  videoTv.playbackRate = 3;
  videoTv.play();
};

function slowPlayTv() {
  videoTv.playbackRate = 0.5;
  videoTv.play();
};

videoBtnTv.addEventListener('click', videoOpenTv);
closeBtnTv.addEventListener('click', closeVideoTv);
pauseBtnTv.addEventListener('click', pausePlayTv);
barTv.addEventListener('change', barMovingTv);
videoTv.addEventListener('timeupdate', videoMoveSliderTv);
volumeChangeTv.addEventListener('change', volumeWorkingTv);
fasterBtnTv.addEventListener('click', fasterPlayTv);
slowBtnTv.addEventListener('click', slowPlayTv);

// --------------------------------------------------------------
// Subtitles TV
//---------------------------------------------------------------

var subtitlesTv = document.getElementById('subtitles2');

var subtTv = videoTv.textTracks[0];
subtTv.mode = 'hidden';



function subtitlesOnTv(){
  subtTv.mode = 'showing';
}

subtitlesTv.addEventListener('click', subtitlesOnTv);

//---------------------AUDIO--------------------------

var popUpM = document.querySelector('.pop-up3');
var BtnM = document.querySelector('.left-btn-au');
var closeBtnM = document.querySelector('.close-btn3');
var music = document.getElementById('music');
var pauseBtnM = document.querySelector('.pause-btn3');
var barM = document.querySelector('.bar3');

var volumeChangeM = document.querySelector('.volume3');
var timeM = document.querySelector('.time3');
var timeAllM = document.querySelector('.time-all3');
var fasterBtnM = document.querySelector('.faster-button3');
var slowBtnM = document.querySelector('.slow-button3');


function musicOpen() {
  popUpM.classList.add('pop-up-on3');
  //music.play();
  music.volume = 1.0;

};

// music close

function closeMusic() {
  popUpM.classList.remove('pop-up-on3');
  music.pause();
};

// custom controls for audio
function pausePlayM() {
  if (music.paused == true) {
    music.play();
    music.playbackRate = 1;
    pauseBtnM.innerHTML = 'Pause';
  } else {
    music.pause();
    pauseBtnM.innerHTML = 'Play';
  }
};

function barMovingM() {
  music.currentTime = music.duration * barM.value / barM.max;
};

function sliderM() {
  barM.value = music.currentTime / music.duration * barM.max;
  music.innerHTML = '0:' + Math.round(music.currentTime);
  timeAllM.innerHTML = ' 0:' +  Math.floor(music.duration);
};

function volumeWorkingM() {
  music.volume = volumeChangeM.value / volumeChangeM.max;
};

function fasterPlayM() {
  music.playbackRate = 3;
  music.play();
};

function slowPlayM() {
  music.playbackRate = 0.5;
  music.play();
};


BtnM.addEventListener('click', musicOpen);
closeBtnM.addEventListener('click', closeMusic);
pauseBtnM.addEventListener('click', pausePlayM);
barM.addEventListener('change', barMovingM);
music.addEventListener('timeupdate', sliderM);
volumeChangeM.addEventListener('change', volumeWorkingM);
fasterBtnM.addEventListener('click', fasterPlayM);
slowBtnM.addEventListener('click', slowPlayM);


