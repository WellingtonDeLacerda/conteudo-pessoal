"use strict"
let btns = document.querySelector("#botoes")
let perfil = document.querySelector("#perfil")
let ativo = document.querySelector("#ativo")
let secao = document.querySelectorAll("section")
let h1 = document.querySelector("h1")

let modo = document.querySelector("#modo")
const perfis = [
    "sad","Bad","Cheat","Happy"
]
const fotos = [
    "images/face-sad.jpg",
    "images/face-bad.jpg",
    "images/face-cheated.jpg",
    "images/face-happy.jpg"
]
const imgs = [
    "images/foto01.jpg",
    "images/foto02.jpg",
    "images/foto03.jpg",
    "images/foto04.jpg",
    "images/foto05.jpg",
    "images/foto06.jpg",
    "images/foto07.jpg"
]
perfis.forEach( (e,i) => {
    let botao = document.createElement("button")
    botao.type = "button"
    botao.innerHTML = e 
    btns.appendChild(botao)
    
    botao.addEventListener("click", () => {
       perfil.src = fotos[i]
    })       
})
function carregar() {
    setTimeout( () => {
        ativo.style.display = "block"
    },1000)
    setTimeout( () => {
        ativo.style.display = "none"
    },4000)
}
function abrirFotos() {
    if (secao[0].style.display === "block" || secao[0].style.display === "") {
        secao[0].style.display = "none"
        secao[1].style.display = "flex"
    }
}
function abrirHome() {
    if (secao[1].style.display === "flex" || secao[1].style.display === "") {
        secao[0].style.display = "block"
        secao[1].style.display = "none"
    }
}
imgs.forEach( (e,i) => {
    let img = document.createElement("img")
    let id = `foto${i}`
    img.src = e 
    img.id = id
    img.alt = id 
    secao[1].appendChild(img)
})
function tema() {
    if (secao[0].style.background === "white" || secao[0].style.background === "") {
        secao[0].style.background = "black"
        h1.style.color = "white"
        modo.className = 'fa-solid fa-sun'
    } else {
        secao[0].style.background = "white"
        h1.style.color = "var(--cor2)"
        modo.className = 'fa-solid fa-moon'
        
    }
    
}