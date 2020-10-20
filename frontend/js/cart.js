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
    let purchaseTeddys = []
        for (var j = 0; j <localStorage.length; j++) {
            let key = localStorage.key(j)
            purchaseTeddys.push(JSON.parse(localStorage.getItem(key)))
        }
    console.log(purchaseTeddys)// temporaire
    //localStorage.clear()

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
            
            // début prix total d'un teddy
            let tdTotalPrice = document.createElement("td")
            let symboleTotalPrice = document.createElement("span")
            let totalPrice = document.createElement("span")
            let stringPrice = price.textContent
            let calcul = stringPrice * inputQuantity.value
            totalPrice.textContent = calcul
            symboleTotalPrice.textContent = " €"
            tdTotalPrice.appendChild(totalPrice)
            tdTotalPrice.appendChild(symboleTotalPrice)
            trPurchase.appendChild(tdTotalPrice)
            // fin prix total d'un teddy

            /*
            let stringTotalPrice = totalPrice.textContent
            console.log(stringTotalPrice)
            */

            tablePurchase.appendChild(trPurchase)
            
            //changement de number du localStorage quand le client modifie la valeur
            inputQuantity.addEventListener("change", function () {
                let teddys = {
                    name: oneTeddy.name,
                    _id: oneTeddy._id,
                    price: oneTeddy.price,
                    color: oneTeddy.color,
                    numbers: inputQuantity.value
                }
                localStorage.setItem(teddys.name, JSON.stringify(teddys))
                // trouver une solution pour le calcul dynamique après le changement de la valeur
            })

        }
}
getPurchase()

console.log("Hey!! tu n'as pas faire planté ton system c'est cool!!")
console.log(localStorage)