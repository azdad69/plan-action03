const catalogue = [
  { id: 1, titre: "Bague argent", prix: 350, statut: "disponible" },
  { id: 2, titre: "Collier perles", prix: 1850, statut: "vendu" },
  { id: 3, titre: "Bracelet cuir", prix: 120, statut: "disponible" },
  { id: 4, titre: "Boucles d'oreilles or", prix: 2400, statut: "disponible" },
  { id: 5, titre: "Pendentif main de Fatma", prix: 180, statut: "réservé" },
  { id: 6, titre: "Montre dorée", prix: 950, statut: "vendu" },
  { id: 4,titre: "bijou de ilham",prix: 1554,statut: "vendu"}
];
//version 2
let disponiblesFilter = catalogue.filter((produit)=>{
return produit.statut === "disponible"
})
let produitFind = catalogue.find((produit)=>{
  return produit.id === 4
})
console.log(produitFind);
console.log(disponiblesFilter)

//version 1
 let disponible = [];
 let produitTrouve ;
for (let i = 0; i < catalogue.length; i++){
if(catalogue[i].statut === "disponible"){
    disponible.push(catalogue[i])
}

if(catalogue[i].id === 4){
    
   produitTrouve=(catalogue[i])
}
}
console.log(disponible);
console.log(produitTrouve);
