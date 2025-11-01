let tableau=[];


const ecrireNom = document.getElementById("ecrireNom");
const stockerNom = document.getElementById("stockerNom");
const popup = document.getElementById("popup");
const message = document.getElementById("message");
const choisir = document.getElementById("choisir");
const ajouter = document.getElementById("ajouter");
const suivant = document.getElementById("suivant");

suivant.style.visibility="hidden";


function ajouterNom(){
    const nvNom=ecrireNom.value;
    if(nvNom!==""){
        tableau.push(nvNom);
        afficherListe();
        ecrireNom.value="";
    }  
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
    //si le tableau est vide
    if (tableau.length === 0) {
        alert("Il n'y a plus de noms à choisir !");
        return;
    }
    //partie choisirNomAleatoire
    const indexAleatoire= Math.floor(Math.random()*tableau.length)
    const nomAleatoire=tableau[indexAleatoire];
    //partie AfficherPopup
    message.textContent=nomAleatoire;
    popup.style.display="block";
    choisir.disabled = true;
    ajouter.disabled = true;
    suivant.style.visibility="visible"
    //boucle pour ne peut  pas rechoisir le meme nom
    tableau.splice(indexAleatoire,1)
    //mis à jour de la liste
    afficherListe();
       
}

function masquerPopup(){
    popup.style.display="none"
    choisir.disabled=false;
    ajouter.disabled = false;
}
