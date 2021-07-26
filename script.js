function carregar() {
    var agora = new Date()
    var hora = agora.getHours()
    var title = document.querySelector("h1#title")
    var subtitle = document.getElementById("subtitle")
    var image = document.getElementById("image")
    if (hora <= 12) {
        title.innerHTML = "Bom dia!"
        subtitle.innerHTML = `Agora são ${hora} horas.`
        image.src = "images/manha.jpg"
        document.body.style.background = "#e2cd9f"
    } else if (hora <= 18) {
        title.innerHTML = "Boa tarde!"
        subtitle.innerHTML = `Agora são ${hora} horas.`
        image.src = "images/tarde.jpg"
        document.body.style.background = "#b9846f"
    } else if (hora <= 24) {
        title.innerHTML = "Boa noite!"
        subtitle.innerHTML = `Agora são ${hora} horas.`
        image.src = "images/noite.jpg"
        document.body.style.background = "#515154"
    }
}