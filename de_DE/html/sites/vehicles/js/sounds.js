let drachiProgrTimer = document.getElementById("drachi-playtime-bar");
initializeAudios();
let audio = new Audio();

function calcAudioProg(currentTime, playtime) {
    var percentageProgr = (currentTime / playtime) * 100;

    var rounded = Math.round(percentageProgr * 100) / 100;

    if (!audio.ended) {
        setTimeout(function () {
            calcAudioProg(audio.currentTime, audio.duration);
        }, 10);
    }
    calcProgBarProg(rounded);
}

function calcProgBarProg(percentage) {
    var minTop = -80;
    var maxTop = -45;

    var topWert = minTop + (percentage / 100) * (maxTop - minTop);

    if(audio.ended){
        drachiProgrTimer.style.top = "-90rem";
        return;
    }
    drachiProgrTimer.style.top = topWert + "rem";
}

function initializeAudios(id) {
    const tracks = [
        {
            name: "test",
            source: "./img/sounds/testing_sound.mp3",
        },
        {
            name: "Das THW Fest",
            source: "./img/sounds/drachi-explain-sound-1.mp3"
        },
        {
            name: "Was ist das THW?",
            source: "./img/sounds/narrator-explain-sound-2.mp3",
        },
    ];
    return tracks[id];
}

function playSound(id){
    let currentPlaying = initializeAudios(id);
    audio.src = currentPlaying.source;
    audio.play();
    calcAudioProg(audio.currentTime, audio.duration);
}