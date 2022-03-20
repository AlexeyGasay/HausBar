
let burger = document.getElementById("burger");
let cross = document.getElementById("cross");


let slideMenu = document.getElementById("slide-menu");

let count = 0;

function menuHandler() {
    
    if(count == 0) {
        slideMenu.style.transform = "none"
    } else {
        slideMenu.style.transform = "translate(-100%)"

    }

    count > 0 ? count = 0 : count = 1;    

}

burger.addEventListener("click", menuHandler);
cross.addEventListener("click", menuHandler);
