const tema = document.querySelector("#tema")
const corpo = document.body
// tema escuro/claro
tema.addEventListener("click", () => {
    corpo.classList.toggle("active")
    if (tema.className.includes("fa-sun")) {
        tema.className = "fa-solid fa-moon"
    }else {
        tema.className = "fa-solid fa-sun"
    }
})
// nav de fotos
const botoes = document.querySelectorAll(".but")
const section = document.querySelectorAll("section")
botoes[0].addEventListener("click", () => {
    section[0].style.display = "block"
    section[1].style.display = "none"
})
botoes[1].addEventListener("click", () => {
    section[0].style.display = "none"
    section[1].style.display = "flex"
})
fetch("assets/data/data.json")
    .then(res => res.json())
    .then(dados => {
        dados.forEach((ele,ind) => {
            let img = document.createElement("img")
            img.src = ele.url
            section[1].appendChild(img)
        })
    })
// face radios e paragrafos
const radio = document.querySelectorAll(".radio")
const label = document.querySelectorAll(".opt")
const box_txt = document.querySelector(".box_txt")
