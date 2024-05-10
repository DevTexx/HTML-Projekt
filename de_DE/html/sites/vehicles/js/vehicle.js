let gkwAdault = document.getElementById("gkw-adault");
let gkwCard = document.getElementById("gkw-card");
let gkwKids = document.getElementById("gkw-kids");
let thwJugendLogo = document.getElementById("the-jugend-logo");
let onlyKids = true;

document.addEventListener('DOMContentLoaded', function () {
    switchAltersGruppe();
}
)

function switchAltersGruppe(){
    if(onlyKids){
        onlyKids = false;
        document.getElementById("gkw-switch-checkbox-1").checked = true;
    }else{
        onlyKids = true;
        document.getElementById("gkw-switch-checkbox-1").checked = false;
    }

    gkwAdaultInfos();
    gkwKidInfos();
}

function gkwAdaultInfos(){
    if (onlyKids){

    gkwCard.style.animation = 'gkw-card-flip-to-adault 2s forwards';
    gkwCard.style.animationPlayState = 'running';

    gkwAdault.style.animation = 'gkw-adault-disappear 0.15s backwards';
    gkwAdault.style.animationDelay = '0.7s';
    gkwAdault.style.animationDirection = 'alternate-reverse';
    gkwAdault.style.animationPlayState = 'running';

    gkwKids.style.animation = 'gkw-kids-disappear 0.15s forwards';
    gkwKids.style.animationDelay = '0.6s';
    gkwKids.style.animationPlayState = 'running';
    
    thwJugendLogo.className = "inactive";
}
}

function gkwKidInfos(){
    if(!onlyKids){
    gkwCard.style.animation = 'gkw-card-flip-to-kids 2s forwards';
    gkwCard.style.animationPlayState = 'running';

    gkwKids.style.animation = 'gkw-kids-disappear 0.15s backwards';
    gkwKids.style.animationDelay = '0.6s';
    gkwKids.style.animationDirection = 'alternate-reverse';
    gkwKids.style.animationPlayState = 'running';

    gkwAdault.style.animation = 'gkw-adault-disappear 0.15s forwards';
    gkwAdault.style.animationDelay = '0.6s';
    gkwAdault.style.animationPlayState = 'running';

    thwJugendLogo.className = "active";
    }
}
