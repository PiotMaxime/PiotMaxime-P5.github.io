//Début Nav barre
let button = document.querySelector(".nav-flex button")
let ulHidden = document.querySelector(".ul-hidden")
button.addEventListener("click", function() {
    if (ulHidden != "ulvisible") {
        ulHidden.classList.toggle("ul-visible")
    } 
})
//Fin Nav barre

/* 
// Methode XML
let listUl = document.getElementById("teddy")
let request = new XMLHttpRequest()
request.onreadystatechange = function() {
    if (this.readyState == XMLHttpRequest.DONE && this.status == 200) {
        let response = JSON.parse(this.responseText)
        for (var i = 0; i < response.length; i++) {
            let object = response[i]
            let listLi = document.createElement('li')
            listLi.appendChild(document.createElement("a")).textContent = object.name
            listUl.appendChild(listLi)
        }
    }
}
request.open("GET", "http://localhost:3000/api/teddies")
 request.send()
*/



// Methode Fetch
let listUl = document.getElementById("teddy")
let getTeddy = async function () {
        let response = await fetch("http://localhost:3000/api/teddies")
        if (response.ok) {  
        let data = await response.json()
            for (let i = 0; i < data.length; i++) {
                let object = data[i]
                let listLi = document.createElement('li')
                let a = document.createElement("a")
                a.setAttribute("href", "./Produit.html?id=" + object._id)
                a.textContent = object.name
                listLi.appendChild(a) 
                //.setAttribute("href", "./Produit.html?id=".object._id)
                let imageTeddy = document.createElement("img")
                imageTeddy.setAttribute("src", object.imageUrl)
                listLi.appendChild(imageTeddy)
                listUl.appendChild(listLi)
            }
        } else {
        alert("Serveur Indisponible!!")
    }
}
getTeddy()

