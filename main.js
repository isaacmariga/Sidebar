let ham = document.querySelector(".ham")
let cross = document.querySelector(".cross")
let sbar = document.querySelector(".sidebar")
let sStyle = getComputedStyle(sbar)


cross.addEventListener("click", event => {
    if (sStyle.display.includes("block")) {
        sbar.style.display = "none"
    } else { sbar.style.display = "block" }

})
ham.addEventListener("click", event => {
    if (sStyle.display.includes("block")) {
        sbar.style.display = "none"
    } else { sbar.style.display = "block" }

})