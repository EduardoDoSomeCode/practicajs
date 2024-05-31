
function randomNames() {

    const namesOfPesona = ["Pepe", "Luis", "Lytzy", "Giovana"]
    let nombrePersona = document.querySelector("#name")
    nombrePersona.innerHTML = namesOfPesona[Math.floor(Math.random() * namesOfPesona.length)]



    const greettingOfTheDay = ["Hola extraño", "Como estas ?", "todo bien?", "Buenas nuevas"]
    let greetingDisplay = document.querySelector("#greeting")
    greetingDisplay.innerHTML = greettingOfTheDay[Math.floor(Math.random() * greettingOfTheDay.length)]

    console.log("Todo esta bien")

}

randomNames()
