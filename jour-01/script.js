const prix = [120,85,300,45,210]
let total = 0 ;
let maxPrix=prix[0]
let superieur = 0
for(let i=0;i < prix.length ; i++){
total = total + prix[i]
if(prix[i]>maxPrix){
    maxPrix = prix[i]
}
if(prix[i]>100){
superieur++
}
}
console.log(total)
console.log(maxPrix);
console.log(superieur);
