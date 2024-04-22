let supportButton = document.getElementById("getHelpWriteMail");

function writeMailFunc(){
    var emailTo = "mailto:support@relaxogames.de";
    window = window.open(emailTo, "Kontaktiere Uns!")
    console.info("FUNKTIONIERT");
}