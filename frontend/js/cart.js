//Début Nav barre
let button = document.querySelector(".nav-flex button")
let ulHidden = document.querySelector(".ul-hidden")
button.addEventListener("click", function() {
    if (ulHidden != "ulvisible") {
        ulHidden.classList.toggle("ul-visible")
    } 
})
//Fin Nav barre
let finalyTotalPrice = document.getElementById("totalTeddysPrice")
let tablePurchase = document.getElementById("tablePurchase")

// Methode de calcul dans un tableau
let finalyCalcul = function (array) {
    let result = 0
    for (let r = 0; r < array.length; r++) {
        result += Number(array[r])
    }
    return result
}
// Fin Methode calcul dans un tableau


//Création méthode modification de la quantité
let onclickStorage = function (oneTeddy, inputQuantity, totalResult, totalPrice, stringPrice) {
    let teddys = {
        name: oneTeddy.name,
        _id: oneTeddy._id,
        price: oneTeddy.price,
        color: oneTeddy.color,
        numbers: inputQuantity.value
    }
    localStorage.setItem(teddys.name, JSON.stringify(teddys))
    let calcul = stringPrice * inputQuantity.value
    totalPrice.textContent = calcul
    let oneTotalPrice = document.getElementsByClassName("oneTeddyTotal")
    let totalPriceStorage = []
    for (let i = 0; i < oneTotalPrice.length; i++) {
        totalPriceStorage.push(Number(oneTotalPrice[i].innerHTML))
    }
    totalResult.textContent = finalyCalcul(totalPriceStorage)
    sessionStorage.setItem("totalPrice", JSON.stringify(totalResult.innerHTML))
}
//Fin création méthode modification de la quantité 


//Récupération du localStorage

let getPurchase = function () {
    let purchaseTeddys = []
        for (let j = 0; j <localStorage.length; j++) {
            let key = localStorage.key(j)
            purchaseTeddys.push(JSON.parse(localStorage.getItem(key)))
        }


    //localStorage.clear()


    let tabPriceTotal = [] //tableau des prix totaux d'un seul teddy
    let totalResult = document.createElement("strong") //création à l'avance du résultat total

        for (let i = 0; i < purchaseTeddys.length; i++){
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
            tdId.setAttribute("class", "teddyId")
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
            totalPrice.setAttribute("class", "oneTeddyTotal")
            symboleTotalPrice.textContent = " €"
            tdTotalPrice.appendChild(totalPrice)
            tdTotalPrice.appendChild(symboleTotalPrice)
            trPurchase.appendChild(tdTotalPrice)
            // fin prix total d'un teddy
           

            tablePurchase.appendChild(trPurchase)

            tabPriceTotal.push(calcul) // Ajoute du calcul des calculs du prix d'un teddy dans le tableau
            
            //appel de la méthode onclickStorage
            inputQuantity.addEventListener("change", function () {
                onclickStorage(oneTeddy, inputQuantity, totalResult, totalPrice, stringPrice)
            })
        }
        
        // débul du total de tous les totals d'un seul teddy
        
        let finalySymbole = document.createElement("strong")
        finalySymbole.textContent = " €"
        totalResult.textContent = finalyCalcul(tabPriceTotal)
        sessionStorage.setItem("totalPrice", JSON.stringify(totalResult.innerHTML))
        finalyTotalPrice.appendChild(totalResult)
        finalyTotalPrice.appendChild(finalySymbole)
        // fin du total de tous les totals d'un seul teddy 
    
}
getPurchase()

//début de l'event pour l'envoie du formulaire
let submit = document.getElementById("validation")
submit.addEventListener("click", function (e) {
    e.preventDefault()
    //création de l'objet contact
    let contact = {
        lastName: document.getElementById("lastName").value,
        firstName: document.getElementById("firstName").value,
        address: document.getElementById("address").value,
        postalCode: document.getElementById("postalCode").value,
        city: document.getElementById("city").value,
        email: document.getElementById("email").value
    }
    //fin de l'objet contact

    //création du tableau products
    let products = []
    let teddyId = document.getElementsByClassName("teddyId")
    for (let i = 0; i < teddyId.length; i++) {
        products.push(teddyId[i].innerHTML)
    } 
    //fin création du tableau products

    //ajout de contact et products dans un objet
    let command = {
        contact,
        products
    }
    //fin de l'ajout
    
    //début d'appel POST
    let postPurchase = async function (data) {
    let response = await fetch("http://localhost:3000/api/teddies/order", {
        method: 'POST',
        headers: {
        "Content-Type": "application/json"
    },
        body: JSON.stringify(data)
    })
        if (response.ok) {
            let responseData = await response.json()
            sessionStorage.setItem("command", JSON.stringify(responseData))
            function RedirectionJavascript(){  //fonction de redirection quand l'utilisateur a cliquer
                document.location.href="../html/Confirmation.html"; 
            }
            RedirectionJavascript()
        } else {
            alert("Vous devez remplir le formulaire.")
        }
    
    localStorage.clear()
    
    }
    postPurchase(command)
    //fin d'appel POST    
})
