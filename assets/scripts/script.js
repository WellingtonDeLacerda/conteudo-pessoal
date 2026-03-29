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
botoes[0].style.background = "var(--cor3)"
botoes[0].addEventListener("click", () => {
     section[0].style.display = "block"
     section[1].style.display = "none"
     botoes[0].style.background = "var(--cor3)"
     botoes[1].style.background = "var(--cor1)"
})
botoes[1].addEventListener("click", () => {
      section[0].style.display = "none"
      section[1].style.display = "flex"
      botoes[1].style.background = "var(--cor3)"
     botoes[0].style.background = "var(--cor1)"
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
const label = document.querySelectorAll(".radio_faces label")
const box_txt = document.querySelector(".box_txt")
const faces = document.querySelector(".faces")
const p = document.createElement("p")
box_txt.appendChild(p)
fetch("assets/data/emotions.json")
    .then(res => res.json())
    .then(dados => {
        p.textContent = dados[0].status
        dados.forEach((ele,ind) => {
            label[ind].addEventListener("click", () => {
                p.textContent = ele.status
                faces.src = ele.url
            })
        })
    }).catch(error => {
        console.log("error:" + error)
    })
radio.forEach((ele,ind) => {
    ele.addEventListener("change", () => {
    label.forEach((e) => {
    e.classList.remove("radio_active")
    e.classList.add("radio_disabled")
    })
        if (ele.checked === true) {
   label[ind].classList.remove("radio_disabled")
   label[ind].classList.add("radio_active")
        }
    })
})