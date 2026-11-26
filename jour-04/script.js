const catalogue = [
  { id: 1, titre: "Bague argent", prix: 350, statut: "disponible" },
  { id: 2, titre: "Collier perles", prix: 1850, statut: "vendu" },
  { id: 3, titre: "Bracelet cuir", prix: 120, statut: "disponible" },
  { id: 4, titre: "Boucles d'oreilles or", prix: 2400, statut: "disponible" },
  { id: 5, titre: "Pendentif main de Fatma", prix: 180, statut: "réservé" },
  { id: 6, titre: "Montre dorée", prix: 950, statut: "vendu" }
];
const titreUpper = catalogue.map((produit)=>{
  return produit.titre.toUpperCase()
})
console.log(titreUpper);

const prix = catalogue.map((produit)=>{
  return produit.prix
})
const total = prix.reduce((acc, number)=>{
  return acc+number
},0)
console.log(total);

const plusPrix = catalogue
.filter((produit)=>{return (produit.prix < 200)})
const nomProduit = plusPrix.map((produit)=>{return produit.titre})
console.log(nomProduit)




