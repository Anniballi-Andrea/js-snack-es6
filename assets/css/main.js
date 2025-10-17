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
        kgWeight: 3,

    },

    {
        name: 'bikeTwo',
        kgWeight: 5,

    },
    {
        name: 'bikeThree',
        kgWeight: 9,
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


//console.log(lighter)
//console.log(lighter)

//individuo il singolo oggetto che corrisponde a un valore specifico dell' array



/*for (let i = 0; i < bikeList.length; i++) {
    const bike = bikeList[i];
    console.log(bike.kgWeight)
    weights.push(bike.kgWeight)
    
    
}*/

const bikeWheights=[]
let lighterBike 
for (let i = 0; i < bikeList.length; i++) {
    const object = bikeList[i];
    //console.log(object.kgWeight)
    bikeWheights.push (object.kgWeight)
    lighterBike = bikeWheights[0]
    for (let i = 0; i < bikeWheights.length; i++) {
        if(bikeWheights[i]< lighterBike){
         lighterBike = bikeWheights[i]
        }

}
}

console.log(lighterBike)
let lighterBikeName

for (let i = 0; i < bikeList.length; i++) {
    const object = bikeList[i];
    console.log(object)
    
    if(object.kgWeight == lighterBike){
        document.getElementById('div').innerHTML = `${object.name}`
        break
        
    }
    
    
}

/*for (let i = 0; i < bikeWheights.length; i++) {
   if(bikeWheights[i]< lighterBike){
    lighterBike = bikeWheights[i]
   }
    
}*/






/*if (weights[0] < weights[1] && weights[0] < weights[2] ){
    lighter= weights[0]
} else if(weights[1] < weights[0])

function weighterBike(objectArray){
    
    
    for (let i = 0; i < objectArray.length; i++) {
        const object = objectArray[i];
        console.log(object)
        
        

        if(lighterBike  < object.kgWeight){
            lighterBike = object.kgWeight
        }
        return lighterBike
        
    }
}*/


/*singleObject diventa weitherBike

crea bici piu leggera e confrontala nel ciclo per aggiornarla con la piu leggera

*/

