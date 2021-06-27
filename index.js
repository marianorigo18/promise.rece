//Promise.race 
//Promise.race obtiene la primera promesa que sea resuelta o
//rechazada,(es la misma estructura).

//example 1/1
let promesa1 = new Promise((resolve, reject)=>{
    setTimeout(function(){ resolve("uno") },500);
});
let promesa2 = new Promise((resolve, reject)=>{
    setTimeout(function(){ resolve("dos") }, 300);
});
let promesa3 = new Promise((resolve, reject)=>{
    setTimeout(function(){ resolve("tres") }, 1000);
});

Promise.race([promesa1,promesa2,promesa3]).then(function(respuesta){
    console.log(respuesta);
}).catch(function(error){
    console.log("error " + error)
});
//dara como respuesta "dos" porque es el primero que se ejecuta;
//al .race lo unico que le importa es el primero que se resuelva,
//a diferencia del .all que espera que todas se ejecuten para ge_
//nerar la respuesta. 