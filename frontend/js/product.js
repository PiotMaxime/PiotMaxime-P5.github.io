//Début Nav barre
let button = document.querySelector(".nav-flex button")
let ulHidden = document.querySelector(".ul-hidden")
button.addEventListener("click", function() {
    if (ulHidden != "ulvisible") {
        ulHidden.classList.toggle("ul-visible")
    } 
})
//Fin Nav barre

let infoTeddy = document.getElementById("info")
let getOneTeddy = async function () {
        let response = await fetch("http://localhost:3000/api/teddies/" + location.search.split("id=")[1])
        if (response.ok) { 
        let data = await response.json()
        let titreName = document.createElement("h3")
        titreName.textContent = data.name 
        let imageTeddy = document.createElement("img")
        imageTeddy.setAttribute("src", data.imageUrl)
        let descriTeddy = document.createElement("p")
        descriTeddy.textContent = data.description
        let divPrice = document.createElement("div")
        let priceTeddy = document.createElement("strong")
        priceTeddy.textContent = data.price
        let euro = document.createElement("span")
        euro.textContent = " €"
        divPrice.appendChild(priceTeddy)
        divPrice.appendChild(euro)
        infoTeddy.appendChild(titreName)
        infoTeddy.appendChild(imageTeddy)
        infoTeddy.appendChild(descriTeddy)
        infoTeddy.appendChild(divPrice)
        let colors = data.colors
        let selectColor = document.createElement("select")
        let menuColor = document.createElement("h5")
        menuColor.textContent = "Choix de la Couleur"
        infoTeddy.appendChild(menuColor)
            for (var i = 0; i < colors.length; i++) {
                let color = colors[i]
                let optionColor = document.createElement("option")
                optionColor.textContent = color
                selectColor.appendChild(optionColor)
                infoTeddy.appendChild(selectColor)
            }
        } else {
        alert("Serveur Indisponible!!")
    }
}
getOneTeddy()