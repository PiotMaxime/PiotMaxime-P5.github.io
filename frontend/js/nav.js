let button = document.querySelector(".nav-flex button")
let ulHidden = document.querySelector(".ul-hidden")
button.addEventListener("click", function() {
    if (ulHidden != "ulvisible") {
        ulHidden.classList.toggle("ul-visible")
    } 
})

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
            for (var i = 0; i < data.length; i++) {
                let object = data[i]
                let listLi = document.createElement('li')
                listLi.appendChild(document.createElement("a")).textContent = object.name  //.textContent = object.name 
                //.setAttribute("href", "./Produit.html")
                listLi.appendChild(document.createElement("img")).setAttribute("src", object.imageUrl)
                listUl.appendChild(listLi)
            }
        } else {
        alert("Serveur Indisponible!!")
    }
}
getTeddy()

/*
let lien = document.querySelectorAll("ul .a")
lien.setAttribute("href", "./Produit.html")
console.log(lien)
*/