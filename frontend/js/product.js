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
        titreName.textContent = data.name //création du nom teddy en titre
        let imageTeddy = document.createElement("img")
        imageTeddy.setAttribute("src", data.imageUrl) //création de l'image
        let descriTeddy = document.createElement("p")
        descriTeddy.textContent = data.description //création du Paragraphe pour la description
        let divPrice = document.createElement("div") 
        let priceTeddy = document.createElement("strong")
        priceTeddy.textContent = data.price //création d'un Strong pour le prix
        let euro = document.createElement("span")
        euro.textContent = " €" //création d'un span pour € (lol)
        divPrice.appendChild(priceTeddy) // ajout du prix dans la div créer
        divPrice.appendChild(euro) // ajout de € dans la div créer
        infoTeddy.appendChild(titreName) // ajout du titre dans la section "info"
        infoTeddy.appendChild(imageTeddy)  // ajout de l'image dans la section "info"
        infoTeddy.appendChild(descriTeddy)  // ajout de la description dans la section "info"
        infoTeddy.appendChild(divPrice)  // ajout de la div du prix dans la section "info"
        
        //Création d'un formulaire
        let formTeddy = document.createElement("form") 

        // -Début liste tableau
        let colors = data.colors 
        let selectColor = document.createElement("select")
        selectColor.setAttribute("id", "colorSelected")  //la couleur sectionner
        let menuColor = document.createElement("h5")
        menuColor.textContent = "Choix de la Couleur"
        infoTeddy.appendChild(menuColor)
            for (let i = 0; i < colors.length; i++) {
                let color = colors[i]
                let optionColor = document.createElement("option")
                optionColor.textContent = color
                selectColor.appendChild(optionColor)
                formTeddy.appendChild(selectColor)
            }
        // -Fin liste tableau

        
        let divQuantity = document.createElement("div")
        let labelQuantity = document.createElement("label")
        labelQuantity.setAttribute("for", "numbersTeddy")
        labelQuantity.textContent = "Quantité : "
        let inputQuantity = document.createElement("input")
        inputQuantity.setAttribute("id", "numbersTeddy") // le nombre de Teddy Choisi
        inputQuantity.setAttribute("type", "number")
        inputQuantity.setAttribute("min", "1")
        inputQuantity.setAttribute("max", "20")
        inputQuantity.setAttribute("value", "1")
        divQuantity.appendChild(labelQuantity)
        divQuantity.appendChild(inputQuantity)
        formTeddy.appendChild(divQuantity)
        let validateBuy = document.createElement("input")
        validateBuy.setAttribute("type", "button")
        validateBuy.setAttribute("value", "Valider l'achat")
        formTeddy.appendChild(validateBuy)
        infoTeddy.appendChild(formTeddy)
        //Fin du formulaire
        
        // TEMPORAIRE
        //localStorage.clear()
        //console.log(localStorage)
        // FIN TEMPORAIRE

        validateBuy.addEventListener("click", function() {
            let purchase = {
                name: data.name,
                _id: data._id,
                price: data.price,
                color: selectColor.value,
                numbers: inputQuantity.value
            }
            localStorage.setItem(purchase.name, JSON.stringify(purchase))
            console.log(localStorage);
        })
        
            
        } else {
        alert("Serveur Indisponible!!")
    }
}
getOneTeddy()

