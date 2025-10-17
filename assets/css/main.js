//console.log('ciao');

/*
Snack 1
Creare un array di oggetti:
Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
Stampare a schermo la bici con peso minore.
*/

//Creare un array di oggetti:


const bikeList =[
    //Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
    {
        name: 'bikeOne',
        kgWeight: 7,

    },

    {
        name: 'bikeTwo',
        kgWeight: 8,

    },
    {
        name: 'bikeThree',
        kgWeight: 6,
    },



]
//Stampare a schermo la bici con peso minore.
/*const bike ={
    name: 'bikeOne',
    kgWeight: 7,
}

console.log(bike.name)
console.log(bike.kgWeight)*/

//devo prendere i valori del peso per fare una comparazione, per farlo:

let lighter

//individuo il singolo oggetto che corrisponde a un valore specifico dell' array

for (let i = 0; i < bikeList.length; i++) {
    const bike = bikeList[i];
    //console.log(bike.kgWeight)
    
    
    
}











