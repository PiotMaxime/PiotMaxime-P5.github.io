let button = document.querySelector(".nav-flex button")
let ulHidden = document.querySelector(".ul-hidden")
button.addEventListener("click", function() {
    if (ulHidden != "ulvisible") {
        ulHidden.classList.toggle("ul-visible")
    } 
})

let getTeddy = async function () {
        let response = await fetch("http://localhost:3000/api/teddies")
        if (response.ok) {  
        let data = await response.json()
        document.getElementById("teddy").innerHTML = data
        } else {
        alert("Serveur Indisponible!!")
        }
}

getTeddy()