let home = 0;
let guest = 0;

const home_score = document.querySelector(".home-score")
const guest_score = document.querySelector(".guest-score")

function reset(){
    home = 0
    guest = 0
    home_score.textContent = home
    guest_score.textContent = guest
    home_score.className = "home-score"
    guest_score.className = "guest-score"
}

function one(){
    home += 1
    home_score.textContent = home
    grt()
}

function two(){
    home += 2
    home_score.textContent = home
    grt()
}

function three(){
    home += 3
    home_score.textContent = home
    grt()
}

function oneg(){
    guest += 1
    guest_score.textContent = guest
    grt()
}

function twog(){
    guest += 2
    guest_score.textContent = guest
    grt()
}

function threeg(){
    guest += 3
    guest_score.textContent = guest
    grt()
}

function grt(){
    if(home > 0 || guest > 0){
        if(home > guest){
            home_score.className += " high"
            guest_score.className = "guest-score"
        }
        else {
            guest_score.className += " high"
            home_score.className = "home-score"
        }
    }
}




