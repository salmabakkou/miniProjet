let tableau=[];
const ecrireNom = document.getElementById("ecrireNom");
const stockerNom = document.getElementById("stockerNom");
const popup = document.getElementById("popup");
const message = document.getElementById("message");

function ajouterNom(){
    const nvNom=ecrireNom.value;
    tableau.push(nvNom);
    afficherListe();
    ecrireNom.value="";
}
function afficherListe(){
    stockerNom.innerHTML = "";
    tableau.forEach(element=>{
        const li= document.createElement("li");
        li.textContent=element;
        stockerNom.appendChild(li);
    })
}
function choisirNomAleatoireAfficherPopup(){
    //partie choisirNomAleatoire
    const indexAleatoire= Math.floor(Math.random()*tableau.length)
    const nomAleatoire=tableau[indexAleatoire];
    //partie AfficherPopup
    message.textContent=nomAleatoire;
    popup.style.display="block";
}
function masquerPopup(){
    popup.style.display="none"
}
