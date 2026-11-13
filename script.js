const boutonHoraires = document.querySelector("#bouton-horaires"); 
const tableHoraires = document.querySelector("#table-horaires"); 
// const boutonPanier = document.querySelector("#panier"); 
// const panier = document.querySelector("#Panier"); 

// 2. Écouter le clic sur le bouton 
boutonHoraires.addEventListener("click", function () {
    document.querySelector("#table-horaires").classList.toggle("cache");
});
tableHoraires.classList.toggle("cache");

document.addEventListener("DOMContentLoaded", function () {

    const menuPanier = document.getElementById("menu-panier");
    const panier = document.getElementById("panier");

    // Afficher le panier au clic sur le menu
    menuPanier.addEventListener("click", function (event) {
        if (nbProduitsTotal != 0) {
            event.preventDefault();
            panier.style.display = "block";
        }
    });

    // Masquer le panier lorsque la souris le quitte
    panier.addEventListener("mouseleave", function () {
        panier.style.display = "none";
    });

});

let nbProduitsTotal = 0, nbCroissants = 0, nbPainAuLevain = 0, nbTartesPomme = 0, nbTartesFraise = 0, nbCookie = 0, nbBaquettes = 0, nbPainAuChocolat = 0, nbEclair = 0;
const compteur = document.querySelector("#compteur"); 
const boutons = document.querySelectorAll(".produit-bouton"); 
for (const bouton of boutons) { 
    bouton.addEventListener("click", function () { 
        nbProduitsTotal++; compteur.textContent = nbProduitsTotal;
        switch (bouton.className) {
            case "croissant":
                nbCroissants++; document.querySelector("#nbCroissants").textContent = nbCroissants; break;
            case "painAuLevain":
                nbPainAuLevain++; document.querySelector("#nbPainAuLevain").textContent = nbPainAuLevain; break;
            case "tarteAuxPommes":
                nbTartesPomme++; document.querySelector("#nbTartesAuxPommes").textContent = nbTartesPomme; break;
            case "tarteAuxFraise":
                nbTartesFraise++; document.querySelector("#nbTartesAuxFraise").textContent = nbTartesFraise; break;
            case "cookie":
                nbCookie++; document.querySelector("#nbCookies").textContent = nbCookie; break;
            case "baguette":
                nbBaquettes++; document.querySelector("#nbBaguettes").textContent = nbBaquettes; break;
            case "painAuChocolat":
                nbPainAuChocolat++; document.querySelector("#nbPainAuChocolat").textContent = nbPainAuChocolat; break;
            case "eclair":
                nbEclair++; document.querySelector("#nbEclairs").textContent = nbEclair; break;
        }
    });
};
