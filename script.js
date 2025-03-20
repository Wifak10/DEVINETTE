const words = [
    { word: "bonjour", hint: "Un mot pour saluer quelqu’un." },
    { word: "arbre", hint: "Il pousse dans la forêt." },
    { word: "maison", hint: "Un endroit où vivre." },
    { word: "voiture", hint: "Un moyen de transport roulant." },
    { word: "ecole", hint: "Là où on apprend." },
    { word: "ordinateur", hint: "Une machine pour coder." },
    { word: "chat", hint: "Un félin domestique." },
    { word: "chien", hint: "Le meilleur ami de l’homme." },
    { word: "fenetre", hint: "Pour regarder dehors." },
    { word: "livre", hint: "Pour lire et rêver." },
    { word: "jouet", hint: "Un objet avec lequel les enfants jouent." },
    { word: "saison", hint: "Un moment de l'année (comme l'hiver)." },
    { word: "voix", hint: "Le son que produit une personne en parlant." },
    { word: "montagne", hint: "Une grande élévation de terrain." },
    { word: "plage", hint: "Un lieu de vacances avec du sable." },
    { word: "avion", hint: "Un moyen de transport aérien." },
    { word: "rue", hint: "Un chemin où circulent les voitures et les piétons." },
    { word: "balle", hint: "Un objet rond avec lequel on joue." },
    { word: "film", hint: "Un média visuel que l’on regarde pour se divertir." },
    { word: "souris", hint: "Petit rongeur souvent utilisé dans les dessins animés." },
    { word: "mer", hint: "Grand plan d'eau salée." },
    { word: "ciel", hint: "Ce que l'on voit au-dessus de nous, souvent bleu." },
    { word: "drapeau", hint: "Un symbole souvent utilisé pour représenter un pays." },
    { word: "soleil", hint: "L'astre qui brille dans le ciel pendant la journée." },
    { word: "etoile", hint: "Un corps céleste qui brille dans le ciel nocturne." },
    { word: "television", hint: "Appareil pour regarder des programmes vidéo." },
    { word: "montre", hint: "Objet que l'on porte pour connaître l'heure." },
    { word: "chaise", hint: "Objet sur lequel on s'assoit." },
    { word: "table", hint: "Meuble plat souvent utilisé pour manger ou travailler." },
    { word: "papillon", hint: "Un insecte coloré avec de grandes ailes." },
    { word: "fleur", hint: "Plante souvent colorée que l'on trouve dans les jardins." },
    { word: "bicycle", hint: "Un moyen de transport à deux roues." },
    { word: "chocolat", hint: "Pâtisserie sucrée souvent utilisée dans les desserts." },
    { word: "fromage", hint: "Produit laitier qui peut être consommé seul ou dans des plats." },
    { word: "pain", hint: "Aliment de base fait à partir de farine et d'eau." },
    { word: "mouton", hint: "Animal domestique souvent élevé pour sa laine." },
    { word: "vache", hint: "Animal chor de ferme qui donne du lait." },
    { word: "poule", hint: "Animal qui pond des œufs." },
    { word: "canard", hint: "Oiseau qui vit souvent près des étangs." },
    { word: "merveille", hint: "Ce qui provoque l'émerveillement." },
    { word: "maillot", hint: "Vêtement souvent porté pour nager." },
    { word: "gateau", hint: "Dessert sucré souvent mangé lors des anniversaires." },
    { word: "cinema", hint: "Lieu où l'on va pour regarder des films." },
    { word: "hotel", hint: "Endroit où l'on peut séjourner lorsqu'on est en voyage." },
    { word: "parapluie", hint: "Objet utilisé pour se protéger de la pluie." },
    { word: "pluie", hint: "Phénomène météorologique consistant en des gouttes d'eau." },
    { word: "neige", hint: "Précipitation formée de cristaux de glace." },
    { word: "riviere", hint: "Cours d'eau naturel." },
    { word: "lac", hint: "Grand étang d'eau douce." },
    { word: "village", hint: "Petite communauté rurale." },
    { word: "ville", hint: "Grande agglomération humaine." },
    { word: "marche", hint: "Lieu où l'on vend et achète des produits." },
    { word: "universite", hint: "Établissement où l'on poursuit des études supérieures." },
    { word: "professeur", hint: "Personne qui enseigne." },
    { word: "etudiant", hint: "Personne qui est inscrite à l'école ou à l'université." },
    { word: "lecon", hint: "Cours ou enseignement donné." },
    { word: "bureau", hint: "Meuble pour travailler ou endroit où l'on travaille." },
    { word: "chambre", hint: "Pièce de la maison où l'on dort." },
    { word: "salon", hint: "Pièce de la maison où l'on reçoit les invités." },
    { word: "cuisine", hint: "Pièce de la maison où l'on prépare à manger." },
    { word: "toilette", hint: "Pièce pour se laver." },
    { word: "armoire", hint: "Meuble pour ranger les vêtements." },
    { word: "placard", hint: "Espace de rangement dans une pièce." },
    { word: "laver", hint: "Action de nettoyer quelque chose avec de l'eau." },
    { word: "nettoyer", hint: "Rendre quelque chose propre." },
    { word: "balai", hint: "Objet pour nettoyer le sol." },
    { word: "aspirateur", hint: "Appareil qui aspire la poussière." },
    { word: "cle", hint: "Objet pour ouvrir ou fermer une serrure." },
    { word: "porte", hint: "Objet mobile pour fermer ou ouvrir un accès." },
    { word: "bague", hint: "Bijou souvent porté au doigt." },
    { word: "bracelet", hint: "Bijou porté autour du poignet." },
    { word: "collier", hint: "Bijou porté autour du cou." },
    { word: "chaussure", hint: "Objet que l'on porte pour protéger les pieds." },
    { word: "chapeau", hint: "Accessoire porté sur la tête." },
    { word: "echarpe", hint: "Vêtement porté autour du cou pour se protéger du froid." },
    { word: "telephone", hint: "Appareil permettant de communiquer à distance." },
    { word: "tablette", hint: "Appareil portable à écran tactile." },
    { word: "ecran", hint: "Surface qui affiche des informations." },
    { word: "clavier", hint: "Dispositif pour entrer des données sur un ordinateur." },
    { word: "batterie", hint: "Source d'énergie utilisée pour alimenter les appareils." },
    { word: "chargeur", hint: "Appareil pour recharger un objet électronique." },
    { word: "carte", hint: "Objet utilisé pour naviguer ou comme moyen de paiement." },
    { word: "internet", hint: "Réseau mondial permettant la communication et l'accès à l'information." }
];

//Variables globales
let selectedword = '';
let displayedWord = '' ;
let guessedLetters = [] ;
let remainingGuesses = 6 ;

//Fonction pour choisir un mot aléatoire
function getRandomWord() {
    const randomIndex = Math.floor(Math.random() * words.length) ;
    return words[randomIndex];
}

//Initialisation du jeu
function startGame(){
    remainingGuesses = 6 ;
    guessedLetters = [];
    document.getElementById("message").textContent = "";
    document.getElementById("message").classList.remove("win","lose");
    document.getElementById("restart-button").style.display = "none" ;
    document.getElementById("remaining-guesses").textContent = remainingGuesses;

    //Sélection aléatoire d'un mot
    const randomWordObj = getRandomWord();
    selectedword = randomWordObj.word.toLowerCase();
    const hint = randomWordObj.hint;

    displayedWord = selectedword.split('').map(()=> '_').join(' ');
    document.getElementById("word-display").textContent = displayedWord;
    document.getElementById("hint-display").textContent = `Indice : ${hint}`;

    createdLetterButtons();
}

// Création des boutons de lettres
function createdLetterButtons(){
    const letterscontainer = document.getElementById("letters-container");
    letterscontainer.innerHTML = '';
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';

    alphabet.split('').forEach(letter => {
        const button = document.createElement('button');
        button.textContent = letter ;
        button.onclick = () => guessedLetters(letter, button);
        letterscontainer.appendChild(button);
    });
}