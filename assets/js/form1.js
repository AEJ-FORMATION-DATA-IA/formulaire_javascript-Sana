var br = document.createElement("br");
var formulaire = document.getElementById('formulaire')

var form = document.createElement("form");
form.setAttribute("methode", "POST");
form.setAttribute("class", "formulairejs");
form.setAttribute("id", "formulairejs");

var labelNom = document.createElement("label");
    var descriptionlabelNom = document.createTextNode("Nom: ");
    labelNom.appendChild(descriptionlabelNom);

    var nom = document.createElement("input");
    nom.setAttribute("type", "text");
    nom.setAttribute("name", "nom");
    nom.setAttribute("id", "nom");
    nom.setAttribute("onchange", "end_form()");
    nom.setAttribute("required", "required");
    nom.setAttribute("pattern", "[A-Za-z].{2,}");
    nom.setAttribute("placeholder", "Veuillez renseigner votre nom");

var labelPrenoms = document.createElement("label");
    var descriptionlabelPrenoms = document.createTextNode("Prenoms: ");
    labelPrenoms.appendChild(descriptionlabelPrenoms);

    var prenoms = document.createElement("input");
    prenoms.setAttribute("type", "text");
    prenoms.setAttribute("name", "prenoms");
    prenoms.setAttribute("id", "prenoms");
    prenoms.setAttribute("onchange", "end_form()");
    prenoms.setAttribute("placeholder", "Veuillez renseigner votre prenoms");
    prenoms.setAttribute("required", "required");

var labelNaissance = document.createElement("label");
    var descriptionlabelNaissance = document.createTextNode("Date de naissance: ");
    labelNaissance.appendChild(descriptionlabelNaissance);
    
    var date_naissance = document.createElement("input");
    date_naissance.setAttribute("type", "date");
    date_naissance.setAttribute("name", "date_naissance");
    date_naissance.setAttribute("id", "date_naissance");
    date_naissance.setAttribute("min", "2000-01-01");
    date_naissance.setAttribute("onchange", "end_form()");
    date_naissance.setAttribute("required", "required");

var labelgenre = document.createElement("label");
    var descriptionlabelgenre = document.createTextNode("Genre:");
    labelgenre.appendChild(descriptionlabelgenre);

    var genreH = document.createElement("input");
    genreH.setAttribute("type", "radio");
    genreH.setAttribute("name", "genre");
    genreH.setAttribute("value", "homme");
    genreH.setAttribute("checked", "checked");

    var labelH = document.createElement("label");
    var description = document.createTextNode("H");
    labelH.appendChild(description);

    var genreF = document.createElement("input");
    genreF.setAttribute("type", "radio");
    genreF.setAttribute("name", "genre");
    genreF.setAttribute("value", "femme");

    var labelF = document.createElement("label");
    var descriptionF = document.createTextNode("F");
    labelF.appendChild(descriptionF);

var labelStatut = document.createElement("label");
    var descriptionlabelStatut = document.createTextNode("Handicape:");
    labelStatut.appendChild(descriptionlabelStatut);

    var statutOui = document.createElement("input");
    statutOui.setAttribute("type", "radio");
    statutOui.setAttribute("name", "statut");
    statutOui.setAttribute("id", "statut");
    statutOui.setAttribute("value", "oui");

    var labelOui = document.createElement("label");
    var descriptionOui = document.createTextNode("OUI");
    labelOui.appendChild(descriptionOui);

    var statutNon = document.createElement("input");
    statutNon.setAttribute("type", "radio");
    statutNon.setAttribute("name", "statut");
    statutNon.setAttribute("id", "statut");
    statutNon.setAttribute("value", "non");
    statutNon.setAttribute("checked", "checked");

    var labelNon = document.createElement("label");
    var descriptionNon = document.createTextNode("NON");
    labelNon.appendChild(descriptionNon);
    
var labelHandicape = document.createElement("label");
    var descriptionlabelHandicape = document.createTextNode("Handicape: ");
    labelHandicape.appendChild(descriptionlabelHandicape);
    var handicape = document.createElement("input");
    handicape.setAttribute("type", "text");
    handicape.setAttribute("name", "handicape");
    handicape.setAttribute("id", "handicape");
    handicape.setAttribute("onchange", "end_form()");
    handicape.setAttribute("placeholder", "Veuillez renseigner votre handicape");

var labelTelephone = document.createElement("label");
    var descriptionlabelTelephone = document.createTextNode("Numero de Telephone: ");
    labelTelephone.appendChild(descriptionlabelTelephone);
    var telephone = document.createElement("input");
    telephone.setAttribute("type", "tel");
    telephone.setAttribute("name", "telephone");
    telephone.setAttribute("id", "telephone");
    telephone.setAttribute("onchange", "end_form()");
    telephone.setAttribute("required", "required");
    telephone.setAttribute("pattern", "\([0-9]{3}\) [0-9]{3} - [0-9]{4}");
    telephone.setAttribute("placeholder", "(###) ### - ####");
//cree le bouton envoyer
var soumettre = document.createElement("input");
    soumettre.setAttribute("type", "submit");
    soumettre.setAttribute("value", "submit");
    soumettre.setAttribute("id", "soumettre");
    soumettre.setAttribute("disabled", "true");

//inserer les champs dans le formulaire
    form.appendChild(labelNom);
    form.appendChild(nom);
    form.appendChild(br.cloneNode());
    form.appendChild(br.cloneNode());  

    form.appendChild(labelPrenoms);
    form.appendChild(prenoms);
    form.appendChild(br.cloneNode());
    form.appendChild(br.cloneNode()); 

    form.appendChild(labelNaissance);
    form.appendChild(date_naissance);
    form.appendChild(br.cloneNode());
    form.appendChild(br.cloneNode()); 

    form.appendChild(labelgenre);
    form.appendChild(genreH);
    form.appendChild(labelH);
    form.appendChild(genreF);
    form.appendChild(labelF);
    form.appendChild(br.cloneNode());
    form.appendChild(br.cloneNode()); 

    form.appendChild(labelStatut);
    form.appendChild(statutOui);
    form.appendChild(labelOui);
    form.appendChild(statutNon);
    form.appendChild(labelNon);
    form.appendChild(br.cloneNode());
    form.appendChild(br.cloneNode()); 

    form.appendChild(labelHandicape);
    form.appendChild(handicape);
    form.appendChild(br.cloneNode());
    form.appendChild(br.cloneNode()); 

    form.appendChild(labelTelephone);
    form.appendChild(telephone);
    form.appendChild(br.cloneNode());
    form.appendChild(br.cloneNode()); 

    form.appendChild(soumettre);

formulaire.appendChild(form);


const boiteForm = document.querySelector('.formulaire'),
    jsformulaire  = boiteForm.querySelectorAll('.formulairejs'),
    enregistrer   = jsformulaire[0].querySelector('input[type="submit"]'),
    statuh = jsformulaire[0].querySelector('input[name="statut"]');
    
    function enregistrerDonnee(e) {
        e.preventDefault();
        var formData = new FormData(jsformulaire[0]);
        alert(formData.get('nom') +'-'+formData.get('prenoms')+'-'+formData.get('date_naissance')+'-'+formData.get('genre')+'-'+formData.get('statut')+'-'+formData.get('handicape')+'-'+formData.get('telephone') );
    }
    
    document.addEventListener('DOMContentLoaded', function(){
        soumettre.addEventListener('click', enregistrerDonnee, false)
    }, false);

function end_form(){
    var champ_obligatoire = [ 'nom', 'prenoms', 'date_naissance', 'handicape', 'telephone'];
    var champ_plein = true;

    for (var h; h<5; h++){
        valeur = document.getElementById(champ_obligatoire[h]).value;
        if( (valeur.length == 0) || (valeur == "") || (valeur == "NULL") ){
            champ_plein = false;
        }
    }
    
    if (champ_plein){
        document.getElementById('soumettre').disabled = false;
    }
    else{
        document.getElementById('soumettre').disabled = true;
    }
}