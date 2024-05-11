let thwJugendLogo = document.getElementById("the-jugend-logo");
let onlyKids = true;

document.addEventListener('DOMContentLoaded', function () {
    switchAltersGruppe();
}
)

function switchAltersGruppe() {
    if (onlyKids) {
        onlyKids = false;
        document.getElementById("gkw-switch-checkbox-1").checked = true;
    } else {
        onlyKids = true;
        document.getElementById("gkw-switch-checkbox-1").checked = false;
    }

    showAdaultInfos();
    showKidsInfos();
}

function showAdaultInfos() {
    if (onlyKids) {
        gkwAdaultInfos();
        mzkwAdaultInfos();
        mtwAdaultInfos();
        fuekwAdaultInfos();
        fuekomkwAdaultInfos();
        fmkwAdaultInfos();
        thwJugendLogo.className = "inactive";
    }
}

function showKidsInfos() {
    if (!onlyKids) {
        gkwKidInfos();
        mzkwKidInfos();
        mtwKidInfos();
        fuekwKidInfos();
        fuekomkwKidInfos();
        fmkwKidInfos();
        thwJugendLogo.className = "active";

    }
}

function gkwAdaultInfos() {
    let gkwAdault = document.getElementById("gkw-adault");
    let gkwCard = document.getElementById("gkw-card");
    let gkwKids = document.getElementById("gkw-kids");

    gkwCard.style.animation = 'gkw-card-flip-to-adault 2s forwards';
    gkwCard.style.animationPlayState = 'running';

    gkwAdault.style.animation = 'gkw-adault-disappear 0.15s backwards';
    gkwAdault.style.animationDelay = '0.7s';
    gkwAdault.style.animationDirection = 'alternate-reverse';
    gkwAdault.style.animationPlayState = 'running';

    gkwKids.style.animation = 'gkw-kids-disappear 0.15s forwards';
    gkwKids.style.animationDelay = '0.6s';
    gkwKids.style.animationPlayState = 'running';
}

function gkwKidInfos() {
    let gkwAdault = document.getElementById("gkw-adault");
    let gkwCard = document.getElementById("gkw-card");
    let gkwKids = document.getElementById("gkw-kids");

    gkwCard.style.animation = 'gkw-card-flip-to-kids 2s forwards';
    gkwCard.style.animationPlayState = 'running';

    gkwKids.style.animation = 'gkw-kids-disappear 0.15s backwards';
    gkwKids.style.animationDelay = '0.6s';
    gkwKids.style.animationDirection = 'alternate-reverse';
    gkwKids.style.animationPlayState = 'running';

    gkwAdault.style.animation = 'gkw-adault-disappear 0.15s forwards';
    gkwAdault.style.animationDelay = '0.6s';
    gkwAdault.style.animationPlayState = 'running';
}

function mzkwAdaultInfos() {
    let mzkwAdault = document.getElementById("mzkw-adault");
    let mzkwCard = document.getElementById("mzkw-card");
    let mzkwKids = document.getElementById("mzkw-kids");

    mzkwCard.style.animation = 'mzkw-card-flip-to-adault 2s forwards';
    mzkwCard.style.animationPlayState = 'running';

    mzkwAdault.style.animation = 'mzkw-adault-disappear 0.15s backwards';
    mzkwAdault.style.animationDelay = '0.7s';
    mzkwAdault.style.animationDirection = 'alternate-reverse';
    mzkwAdault.style.animationPlayState = 'running';

    mzkwKids.style.animation = 'mzkw-kids-disappear 0.15s forwards';
    mzkwKids.style.animationDelay = '0.6s';
    mzkwKids.style.animationPlayState = 'running';
}

function mzkwKidInfos() {
    let mzkwAdault = document.getElementById("mzkw-adault");
    let mzkwCard = document.getElementById("mzkw-card");
    let mzkwKids = document.getElementById("mzkw-kids");

    mzkwCard.style.animation = 'mzkw-card-flip-to-kids 2s forwards';
    mzkwCard.style.animationPlayState = 'running';

    mzkwKids.style.animation = 'mzkw-kids-disappear 0.15s backwards';
    mzkwKids.style.animationDelay = '0.6s';
    mzkwKids.style.animationDirection = 'alternate-reverse';
    mzkwKids.style.animationPlayState = 'running';

    mzkwAdault.style.animation = 'mzkw-adault-disappear 0.15s forwards';
    mzkwAdault.style.animationDelay = '0.6s';
    mzkwAdault.style.animationPlayState = 'running';
}

function mtwAdaultInfos() {
    let mtwAdault = document.getElementById("mtw-adault");
    let mtwCard = document.getElementById("mtw-card");
    let mtwKids = document.getElementById("mtw-kids");

    mtwCard.style.animation = 'mtw-card-flip-to-adault 2s forwards';
    mtwCard.style.animationPlayState = 'running';

    mtwAdault.style.animation = 'mtw-adault-disappear 0.15s backwards';
    mtwAdault.style.animationDelay = '0.7s';
    mtwAdault.style.animationDirection = 'alternate-reverse';
    mtwAdault.style.animationPlayState = 'running';

    mtwKids.style.animation = 'mtw-kids-disappear 0.15s forwards';
    mtwKids.style.animationDelay = '0.6s';
    mtwKids.style.animationPlayState = 'running';
}

function mtwKidInfos() {
    let mtwAdault = document.getElementById("mtw-adault");
    let mtwCard = document.getElementById("mtw-card");
    let mtwKids = document.getElementById("mtw-kids");

    mtwCard.style.animation = 'mtw-card-flip-to-kids 2s forwards';
    mtwCard.style.animationPlayState = 'running';

    mtwKids.style.animation = 'mtw-kids-disappear 0.15s backwards';
    mtwKids.style.animationDelay = '0.6s';
    mtwKids.style.animationDirection = 'alternate-reverse';
    mtwKids.style.animationPlayState = 'running';

    mtwAdault.style.animation = 'mtw-adault-disappear 0.15s forwards';
    mtwAdault.style.animationDelay = '0.6s';
    mtwAdault.style.animationPlayState = 'running';
}

function fmkwAdaultInfos() {
    let fmkwAdault = document.getElementById("fmkw-adault");
    let fmkwCard = document.getElementById("fmkw-card");
    let fmkwKids = document.getElementById("fmkw-kids");

    fmkwCard.style.animation = 'fmkw-card-flip-to-adault 2s forwards';
    fmkwCard.style.animationPlayState = 'running';

    fmkwAdault.style.animation = 'fmkw-adault-disappear 0.15s backwards';
    fmkwAdault.style.animationDelay = '0.7s';
    fmkwAdault.style.animationDirection = 'alternate-reverse';
    fmkwAdault.style.animationPlayState = 'running';

    fmkwKids.style.animation = 'fmkw-kids-disappear 0.15s forwards';
    fmkwKids.style.animationDelay = '0.6s';
    fmkwKids.style.animationPlayState = 'running';
}

function fmkwKidInfos() {
    let fmkwAdault = document.getElementById("fmkw-adault");
    let fmkwCard = document.getElementById("fmkw-card");
    let fmkwKids = document.getElementById("fmkw-kids");

    fmkwCard.style.animation = 'fmkw-card-flip-to-kids 2s forwards';
    fmkwCard.style.animationPlayState = 'running';

    fmkwKids.style.animation = 'fmkw-kids-disappear 0.15s backwards';
    fmkwKids.style.animationDelay = '0.6s';
    fmkwKids.style.animationDirection = 'alternate-reverse';
    fmkwKids.style.animationPlayState = 'running';

    fmkwAdault.style.animation = 'fmkw-adault-disappear 0.15s forwards';
    fmkwAdault.style.animationDelay = '0.6s';
    fmkwAdault.style.animationPlayState = 'running';
}

function fuekwAdaultInfos() {
    let fuekwAdault = document.getElementById("fuekw-adault");
    let fuekwCard = document.getElementById("fuekw-card");
    let fuekwKids = document.getElementById("fuekw-kids");

    fuekwCard.style.animation = 'fuekw-card-flip-to-adault 2s forwards';
    fuekwCard.style.animationPlayState = 'running';

    fuekwAdault.style.animation = 'fuekw-adault-disappear 0.15s backwards';
    fuekwAdault.style.animationDelay = '0.7s';
    fuekwAdault.style.animationDirection = 'alternate-reverse';
    fuekwAdault.style.animationPlayState = 'running';

    fuekwKids.style.animation = 'fuekw-kids-disappear 0.15s forwards';
    fuekwKids.style.animationDelay = '0.6s';
    fuekwKids.style.animationPlayState = 'running';
}

function fuekwKidInfos() {
    let fuekwAdault = document.getElementById("fuekw-adault");
    let fuekwCard = document.getElementById("fuekw-card");
    let fuekwKids = document.getElementById("fuekw-kids");

    fuekwCard.style.animation = 'fuekw-card-flip-to-kids 2s forwards';
    fuekwCard.style.animationPlayState = 'running';

    fuekwKids.style.animation = 'fuekw-kids-disappear 0.15s backwards';
    fuekwKids.style.animationDelay = '0.6s';
    fuekwKids.style.animationDirection = 'alternate-reverse';
    fuekwKids.style.animationPlayState = 'running';

    fuekwAdault.style.animation = 'fuekw-adault-disappear 0.15s forwards';
    fuekwAdault.style.animationDelay = '0.6s';
    fuekwAdault.style.animationPlayState = 'running';
}

function fuekomkwAdaultInfos() {
    let fuekomkwAdault = document.getElementById("fuekomkw-adault");
    let fuekomkwCard = document.getElementById("fuekomkw-card");
    let fuekomkwKids = document.getElementById("fuekomkw-kids");

    fuekomkwCard.style.animation = 'feukomkw-card-flip-to-adault 2s forwards';
    fuekomkwCard.style.animationPlayState = 'running';

    fuekomkwAdault.style.animation = 'feukomkw-adault-disappear 0.15s backwards';
    fuekomkwAdault.style.animationDelay = '0.7s';
    fuekomkwAdault.style.animationDirection = 'alternate-reverse';
    fuekomkwAdault.style.animationPlayState = 'running';

    fuekomkwKids.style.animation = 'feukomkw-kids-disappear 0.15s forwards';
    fuekomkwKids.style.animationDelay = '0.6s';
    fuekomkwKids.style.animationPlayState = 'running';
}

function fuekomkwKidInfos() {
    let fuekomkwAdault = document.getElementById("fuekomkw-adault");
    let fuekomkwCard = document.getElementById("fuekomkw-card");
    let fuekomkwKids = document.getElementById("fuekomkw-kids");

    fuekomkwCard.style.animation = 'fuekomkw-card-flip-to-kids 2s forwards';
    fuekomkwCard.style.animationPlayState = 'running';

    fuekomkwKids.style.animation = 'fuekomkw-kids-disappear 0.15s backwards';
    fuekomkwKids.style.animationDelay = '0.6s';
    fuekomkwKids.style.animationDirection = 'alternate-reverse';
    fuekomkwKids.style.animationPlayState = 'running';

    fuekomkwAdault.style.animation = 'fuekomkw-adault-disappear 0.15s forwards';
    fuekomkwAdault.style.animationDelay = '0.6s';
    fuekomkwAdault.style.animationPlayState = 'running';
}