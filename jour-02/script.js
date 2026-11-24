function estimerBijou(poids, prixGramme){
    let total = (Math.round((poids*prixGramme)*100))/100
    return total
}
function validerPoids(valeur){
    if(valeur === ""){
        return "Le poids est obligatoire"
    }
    if(isNaN(Number(valeur))){
    return "Le poids doits etre un nombre"
    }if(valeur<=0){
        return "Le poids doit etre positive"
    }
    return ""
}
console.log(estimerBijou(1.5,650))
console.log(estimerBijou(2.5,612.4))
console.log(estimerBijou(0.333,600))
console.log(validerPoids(""))
console.log(validerPoids("abc"))
console.log(validerPoids(-3))
console.log(validerPoids(2.5))