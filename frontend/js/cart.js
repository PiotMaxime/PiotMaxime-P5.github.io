//Début Nav barre
let button = document.querySelector(".nav-flex button")
let ulHidden = document.querySelector(".ul-hidden")
button.addEventListener("click", function() {
    if (ulHidden != "ulvisible") {
        ulHidden.classList.toggle("ul-visible")
    } 
})
//Fin Nav barre

let tablePurchase = document.getElementById("tablePurchase")
console.log(listPurchase)
let getPurchase = function () {
    let purchaseTeddys = [
        JSON.parse(localStorage.getItem("Norbert")),
        JSON.parse(localStorage.getItem("Arnold")),
        JSON.parse(localStorage.getItem("Lenny and Carl")),
        JSON.parse(localStorage.getItem("Gustav")),
        JSON.parse(localStorage.getItem("Garfunkel"))
    ]
    console.log(purchaseTeddys)// temporaire


    try { 
        for (var i = 0; i < purchaseTeddys.length; i++){
            let oneTeddy = purchaseTeddys[i]
            let trPurchase = document.createElement("tr")

            // début nom
            let tdName = document.createElement("td")
            tdName.textContent = oneTeddy.name
            trPurchase.appendChild(tdName)
            // fin nom

            // début id
            let tdId = document.createElement("td")
            tdId.textContent = oneTeddy._id
            trPurchase.appendChild(tdId)
            // fin id

            // début color
            let tdColor = document.createElement("td")
            tdColor.textContent = oneTeddy.color
            trPurchase.appendChild(tdColor)
            // fin color 

            //début quantité
            let tdQuantity = document.createElement("td")
            let inputQuantity = document.createElement("input")
            inputQuantity.setAttribute("type", "number")
            inputQuantity.setAttribute("min", "1")
            inputQuantity.setAttribute("max", "20")
            inputQuantity.setAttribute("value", oneTeddy.numbers)
            tdQuantity.appendChild(inputQuantity)
            trPurchase.appendChild(tdQuantity)
            //fin quantité

            // début prix unitaire
            let tdPrice = document.createElement("td")
            let price = document.createElement("span")
            price.textContent = oneTeddy.price
            let symbolePrice = document.createElement("span")
            symbolePrice.textContent = " €"
            tdPrice.appendChild(price)
            tdPrice.appendChild(symbolePrice)
            trPurchase.appendChild(tdPrice)
            // fin prix unitaire
            
            // début prix total
            let tdTotalPrice = document.createElement("td")
            let stringPrice = price.textContent
            console.log(stringPrice)
            console.log(inputQuantity.value)
            
            let calcul = stringPrice * inputQuantity.value
            console.log(calcul)
            tdTotalPrice.textContent = calcul
            trPurchase.appendChild(tdTotalPrice)
            /*
            let pTest = document.createElement('p')
            pTest.textContent = oneTeddy.name
            listPurchase.appendChild(pTest)
            */

            tablePurchase.appendChild(trPurchase)
        }
    } catch (e) {
        console.log("Erreur Rencontrer : " + e.stack)
    }
}
getPurchase()

console.log("ça marche!")