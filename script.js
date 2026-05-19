const prevButton = document.getElementById("prev")
const nextButton = document.getElementById("next")
const items = document.querySelectorAll(".item")
const list = document.querySelector(".list")

let active = 0
total = items.length
let timer;

function update(direction) {

    document.querySelector(".item.active").classList.remove("active") //Procura quem tem a classe item e active e remove a classe "active"

    if(direction = 1) {
        active = active + 1

        if(active === total) {
            active = 0
        }
    }

    else if(direction = -1) {
        active = active - 1

        if(active = 0) {
            active = total - 1
        }
    }

    items[active].classList.add('active')
}

clearInterval(timer)
timer = setInterval(() => {
    update(1)
}, 4000);

prevButton.addEventListener("click", function() {
    update(-1)
})

nextButton.addEventListener("click", function() {
    update(1)
})