const tema = document.querySelector("#tema")
const corpo = document.body
// tema escuro/claro
const temaSalvo = localStorage.getItem("tema")
if (temaSalvo === "active") {
    corpo.classList.add("active")
    tema.classList.remove("fa-sun")
    tema.classList.add("fa-moon")
}else {
    tema.classList.remove("fa-moon")
    tema.classList.add("fa-sun")
}
tema.addEventListener("click", () => {
    corpo.classList.toggle("active")
    if (corpo.classList.contains("active")) {
        localStorage.setItem("tema","active")
        tema.classList.remove("fa-sun")
        tema.classList.add("fa-moon")
    }else {
        localStorage.setItem("tema","inactive" )
        tema.classList.remove("fa-moon")
        tema.classList.add("fa-sun")
    }
})
// nav de fotos
const botoes = document.querySelectorAll(".but")
const Scontent = document.querySelector(".content")
const Sfotos = document.querySelector(".fotos")

botoes[0].style.background = "var(--cor3)"

botoes.forEach((btn, i) => {
    btn.addEventListener("click", () => {

        // Reset botão
        botoes.forEach(b => b.style.background = "var(--cor1)")
        btn.style.background = "var(--cor3)"

        if (i === 0) {
            Scontent.classList.add("content_active")
            Scontent.classList.remove("content_disabled")

            Sfotos.classList.add("fotos_disabled")
            Sfotos.classList.remove("fotos_active")
        } else {
            Sfotos.classList.add("fotos_active")
            Sfotos.classList.remove("fotos_disabled")

            Scontent.classList.add("content_disabled")
            Scontent.classList.remove("content_active")
        }
    })
})

fetch("assets/data/data.json")
    .then(res => res.json())
    .then(dados => {
        dados.forEach((ele,ind) => {
            let img = document.createElement("img")
            img.src = ele.url
            Sfotos.appendChild(img)
        })
    })
// face radios e paragrafos
const radio = document.querySelectorAll(".radio")
const label = document.querySelectorAll(".radio_faces label")
const box_txt = document.querySelector(".box_txt")
const faces = document.querySelector(".faces")
const p = document.createElement("p")
const faceSalva = localStorage.getItem("face")
box_txt.appendChild(p)
fetch("assets/data/emotions.json")
    .then(res => res.json())
    .then(dados => {
        p.textContent = dados[0].status
        dados.forEach((ele,ind) => {
        if (faceSalva === ele.name) {
            p.textContent = ele.status
            faces.src = ele.url
        }
            label[ind].addEventListener("click", () => {
                p.textContent = ele.status
                faces.src = ele.url
                localStorage.setItem("face",ele.name )
            })
        })
    }).catch(error => {
        console.log("error:" + error)
    })
const borderSalva = localStorage.getItem("borda")
radio.forEach((ele,ind) => {
    if (borderSalva == ind) {
   label[ind].classList.remove("radio_disabled")
   label[ind].classList.add("radio_active")
   ele.checked = true
    }
    ele.addEventListener("change", () => {
    label.forEach((e) => {
    e.classList.remove("radio_active")
    e.classList.add("radio_disabled")
    })
        if (ele.checked) {     
   label[ind].classList.remove("radio_disabled")
   label[ind].classList.add("radio_active")
   localStorage.setItem("borda",ind)
        }
    })
})