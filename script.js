
function randomNames() {

    const namesOfPesona = ["Pepe", "Luis", "Lytzy", "Giovana"]
    let nombrePersona = document.querySelector("#name")
    nombrePersona.innerHTML = namesOfPesona[Math.floor(Math.random() * namesOfPesona.length) ]

    console.log("Todo esta bien")

}

randomNames()
