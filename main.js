let ham = document.querySelector(".ham")
let cross = document.querySelector(".cross")
let sbar = document.querySelector(".sidebar")
let sStyle = getComputedStyle(sbar)


// cross.addEventListener("click", event => {
//     if (sStyle.display.includes("block")) {
//         sbar.style.display = "none"
//     } else { sbar.style.display = "block" }

// })
// ham.addEventListener("click", event => {
//     if (sStyle.display.includes("block")) {
//         sbar.style.display = "none"
//     } else { sbar.style.display = "block" }

// })

ham.addEventListener("click", function() {
    // console.log(sbar.classList);
    //     if (sbar.classList.contains("sidebar-show")) {
    //         sbar.classList.remove("sidebar-show")
    //     } else { sbar.classList.add("sidebar-show") }
    // })
    sbar.classList.toggle("sidebar-show");
})
cross.addEventListener("click", function() {
    sbar.classList.remove("sidebar-show");
})