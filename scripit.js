const squadre = [
    {
        nome : 'palermo',
        punti : getRandom(1,100),
        falli : getRandom(1,100),
    },
    {
        nome : 'roma',
        punti : getRandom(1,100),
        falli : getRandom(1,100),
    },
    {
        nome : 'juve',
        punti : getRandom(1,100),
        falli : getRandom(1,100),
    },
    {
        nome : 'inter',
        punti : getRandom(1,100),
        falli : getRandom(1,100),
    },
    {
        nome : 'milan',
        punti : getRandom(1,100),
        falli : getRandom(1,100),
    },
    {
        nome : 'venezia',
        punti : getRandom(1,100),
        falli : getRandom(1,100),
    },
]
console.log(squadre);




 const newSquadre = []
 console.log(newSquadre);


 squadre.map((calcSquad) =>{
    const {nome, falli} = calcSquad
    newSquadre.push(calcSquad)

 })

function getRandom(min, max) {
    return Math.floor(Math.random() * (max + min - 1) + min)
}

