let scrollbutton = document.getElementById("upbutton");
const respMenuButton = document.getElementById("resp-menu-area-btn")


window.onscroll = function () { scrollingEvent() };
document.addEventListener('DOMContentLoaded', function () {
    const dropdownable = document.querySelector('.navigation .headlining .overmenu#dropdownable');
    const teamDropDown = document.querySelector('.navigation .team-drop-down');

    dropdownable.addEventListener('mouseenter', function () {
        teamDropDown.style.display = 'flex';
    });

    teamDropDown.addEventListener('mouseenter', function () {
        teamDropDown.style.display = 'flex';
    });

    dropdownable.addEventListener('mouseleave', function () {
        teamDropDown.style.display = 'none';
    });
    teamDropDown.addEventListener('mouseleave', function () {
        teamDropDown.style.display = 'none';
    });
});

function scrollingEvent() {
    scrollFunction();
    progressFunc();
}

function progressFunc() {
    var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    var scrolled = (winScroll / height) * 100;
    document.getElementById("scrollbar").style.width = scrolled + "%";
}

function scrollFunction() {
    if (document.body.scrollTop > 90 || document.documentElement.scrollTop > 90) {
        scrollbutton.style.display = "block";
    } else {
        scrollbutton.style.display = "none";
    }
}

function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

respMenuButton.addEventListener('click', () => {
    respToggleMenu();
});

var respMenu = document.getElementById("resp-menu");
var respMenuLI = document.getElementById("resp-ul");
var respMenuClose = document.getElementById("resp-menu-area-btn-close");
var respMenuOpen = document.getElementById("resp-menu-area-btn-open");

var shown = false;

function respToggleMenu() {
    if (!shown) {
        shown = true;
        respMenu.style.display = "block";
        respMenuLI.style.display = "contents";
        respMenuClose.style.display = "block";
        respMenuOpen.style.display = "none";

    } else {
        shown = false;
        respMenu.style.display = "none";
        respMenuLI.style.display = "none";
        respMenuClose.style.display = "none";
        respMenuOpen.style.display = "block";
    }
}
