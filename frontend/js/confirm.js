let getCommand = function () {
    let multiObjects = []
        for (let j = 0; j <sessionStorage.length; j++) {
            let key = sessionStorage.key(j)
            multiObjects.push(JSON.parse(sessionStorage.getItem(key)))
        }
    console.log(multiObjects)
    

    //récupération du prix total
    let objectPrice = multiObjects[1]
    let totalPrice = document.getElementById("totalPrice")
    totalPrice.textContent = objectPrice
    //fin de la récupération du prix total

    //récupération de l'idOrder
    let objectsId= multiObjects[0].orderId
    let idOrder = document.getElementById("idOrder")
    idOrder.textContent = objectsId
    //fin de récupération de l'idOrder
    
    
    //récuperation de l'objet products + ajout des noms
    let objectProducts = multiObjects[0].products

    let teddys = document.getElementById("teddys")
    for (let i = 0; i < objectProducts.length; i++) {
    let products = objectProducts[i]
    let oneTeddy = document.createElement("p")
    oneTeddy.textContent = products.name
    teddys.appendChild(oneTeddy)
    }
    //fin de récupération et des ajouts de nom
}
getCommand()

