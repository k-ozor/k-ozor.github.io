var darkButton = document.getElementById("darkButton");

function darkmode(){
    var htmlBody = document.body;
    htmlBody.classList.toggle("dark-mode");

}

darkButton.addEventListener("click", darkmode);


var menuButton = document.getElementById("menuButton");

function menuOpen(){
    var htmlBody1 = document.body;
    htmlBody1.classList.toggle("visibility");
}

menuButton.addEventListener("click", menuOpen);


var buttonUp = document.getElementById("buttonUp");

function toTop(){
    document.documentElement.scrollTo({top:0, behavior:'smooth'});
}

buttonUp.addEventListener("click", toTop)