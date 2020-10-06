let button = document.querySelector(".nav-flex button")
let ulHidden = document.querySelector(".ul-hidden")
button.addEventListener("click", function() {
    if (ulHidden != "ulvisible") {
        ulHidden.classList.toggle("ul-visible")
    } 
})


let getTeddy = async function() {
    let response = await fetch("http://localhost:3000/api/teddies") 
    if (response.ok) {
        let objects = await response.json()  //je prend le json pour le transformer en objet


        function tabObject(objects) { // je veux transformer le json en tableau et faire sortir que les noms
            for (var i = 0; i < objects.lenght; i++) { 
                var object = objects[i]
                console.log(object.name)
            }
        }
        tabObject(objects)
    } else {  //si on ne trouve pas le json
        alert("Serveur Indisponible")
    }
}
getTeddy()


/* Get json V1 + HTML (ça fonctionne)
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
*/