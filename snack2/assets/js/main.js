/*Snack2**
Creare un array di oggetti di squadre di calcio.
Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
Generare numeri random al posto degli 0 nelle proprietà “punti” fatti e “falli subiti”.
Infine, creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.*/

const teams = [
    {
        name: 'Roma',
        point: 0,
        fouls: 0,
    },
    {
        name: 'Lazio',
        point: 0,
        fouls: 0,
    },
    {
        name: 'Milan',
        point: 0,
        fouls: 0,
    },
];
//dichiaro il nuovo array
const newArray = []




//mi prendo l'array e lo ciclo per poter prendere i singoli object
for (let i = 0; i < teams.length; i++) {
    const team = teams[i];
    //genero i numeri random
    team.point = Math.floor(Math.random() * 100);
    team.fouls = Math.floor(Math.random() * 100);

}
console.log(teams)
//devo creare un nuovo object da inserire nel nuovo array
for (let i = 0; i < teams.length; i++) {
    const team = teams[i];
    let newObject = {}
    
    //prendo i le singole key per confrontarle per capire se devono essere inserite nel nuovo array
    for (let key in team) {
        //console.log(key)
        //controllo se sono diverse da point
        if (key !== 'point') {
            //in questo caso le inserisco nel nuovo object
            newObject[key] = team[key]

            //console.log(newObject)
            
            
        }
        


    }
    //pusho il nuovo object dentro il nuovo array
    newArray.push(newObject)
    
}
//loggo l'array per vedere se funziona
console.log(newArray)