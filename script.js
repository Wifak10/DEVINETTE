const words = [
    { word: "bonjour", hint: "Un mot pour saluer quelqu’un." },
    { word: "arbre", hint: "Il pousse dans la foret." },
    { word: "maison", hint: "Un endroit ou vivre." },
    { word: "voiture", hint: "Un moyen de transport roulant." },
    { word: "ecole", hint: "La ou on apprend." },
    { word: "ordinateur", hint: "Une machine pour coder." },
    { word: "chat", hint: "Un felin domestique." },
    { word: "chien", hint: "Le meilleur ami de l’homme." },
    { word: "fenetre", hint: "Pour regarder dehors." },
    { word: "livre", hint: "Pour lire et rever." },
    { word: "jouet", hint: "Un objet avec lequel les enfants jouent." },
    { word: "saison", hint: "Un moment de l'annee (comme l'hiver)." },
    { word: "voix", hint: "Le son que produit une personne en parlant." },
    { word: "montagne", hint: "Une grande elevation de terrain." },
    { word: "plage", hint: "Un lieu de vacances avec du sable." },
    { word: "avion", hint: "Un moyen de transport aerien." },
    { word: "rue", hint: "Un chemin ou circulent les voitures et les pietons." },
    { word: "balle", hint: "Un objet rond avec lequel on joue." },
    { word: "film", hint: "Un media visuel que l’on regarde pour se divertir." },
    { word: "television", hint: "Appareil pour regarder des programmes video." },
    { word: "souris", hint: "Petit rongeur souvent utilise dans les dessins animes." },
    { word: "mer", hint: "Grand plan d'eau salee." },
    { word: "ciel", hint: "Ce que l'on voit au-dessus de nous, souvent bleu." },
    { word: "drapeau", hint: "Un symbole souvent utilise pour representer un pays." },
    { word: "soleil", hint: "L'astre qui brille dans le ciel pendant la journee." },
    { word: "etoile", hint: "Un corps celeste qui brille dans le ciel nocturne." },
    { word: "montre", hint: "Objet que l'on porte pour connaitre l'heure." },
    { word: "chaise", hint: "Objet sur lequel on s'assoit." },
    { word: "table", hint: "Meuble plat souvent utilise pour manger ou travailler." },
    { word: "papillon", hint: "Un insecte colore avec de grandes ailes." },
    { word: "fleur", hint: "Plante souvent coloree que l'on trouve dans les jardins." },
    { word: "bicycle", hint: "Un moyen de transport a deux roues." },
    { word: "chocolat", hint: "Patisserie sucree souvent utilisee dans les desserts." },
    { word: "fromage", hint: "Produit laitier qui peut etre consomme seul ou dans des plats." },
    { word: "pain", hint: "Aliment de base fait a partir de farine et d'eau." },
    { word: "mouton", hint: "Animal domestique souvent eleve pour sa laine." },
    { word: "vache", hint: "Animal de ferme qui donne du lait." },
    { word: "poule", hint: "Animal qui pond des œufs." },
    { word: "canard", hint: "Oiseau qui vit souvent pres des etangs." },
    { word: "merveille", hint: "Ce qui provoque l'emerveillement." },
    { word: "maillot", hint: "Vetement souvent porte pour nager." },
    { word: "gateau", hint: "Dessert sucre souvent mange lors des anniversaires." },
    { word: "cinema", hint: "Lieu ou l'on va pour regarder des films." },
    { word: "hotel", hint: "Endroit ou l'on peut sejourner lorsqu'on est en voyage." },
    { word: "parapluie", hint: "Objet utilise pour se proteger de la pluie." },
    { word: "pluie", hint: "Phenomenes meteorologique consistant en des gouttes d'eau." },
    { word: "neige", hint: "Precipitation formee de cristaux de glace." },
    { word: "riviere", hint: "Cours d'eau naturel." },
    { word: "lac", hint: "Grand etang d'eau douce." },
    { word: "village", hint: "Petite communaute rurale." },
    { word: "ville", hint: "Grande agglomeration humaine." },
    { word: "marche", hint: "Lieu ou l'on vend et achete des produits." },
    { word: "ecole", hint: "Lieu ou l'on va pour etudier." },
    { word: "universite", hint: "Etablissement ou l'on poursuit des etudes superieures." },
    { word: "professeur", hint: "Personne qui enseigne." },
    { word: "etudiant", hint: "Personne qui est inscrite a l'ecole ou a l'universite." },
    { word: "lecon", hint: "Cours ou enseignement donne." },
    { word: "bureau", hint: "Meuble pour travailler ou endroit ou l'on travaille." },
    { word: "chambre", hint: "Piece de la maison ou l'on dort." },
    { word: "salon", hint: "Piece de la maison ou l'on recoit les invites." },
    { word: "cuisine", hint: "Piece de la maison ou l'on prepare a manger." },
    { word: "toilette", hint: "Piece pour se laver." },
    { word: "armoire", hint: "Meuble pour ranger les vetements." },
    { word: "placard", hint: "Espace de rangement dans une piece." },
    { word: "balai", hint: "Objet pour nettoyer le sol." },
    { word: "aspirateur", hint: "Appareil qui aspire la poussiere." },
    { word: "cle", hint: "Objet pour ouvrir ou fermer une serrure." },
    { word: "porte", hint: "Objet mobile pour fermer ou ouvrir un acces." },
    { word: "bague", hint: "Bijou souvent porte au doigt." },
    { word: "bracelet", hint: "Bijou porte autour du poignet." },
    { word: "collier", hint: "Bijou porte autour du cou." },
    { word: "montre", hint: "Objet pour mesurer le temps." },
    { word: "chaussure", hint: "Objet que l'on porte pour proteger les pieds." },
    { word: "chapeau", hint: "Accessoire porte sur la tete." },
    { word: "echarpe", hint: "Vetement porte autour du cou pour se proteger du froid." },
    { word: "telephone", hint: "Appareil permettant de communiquer a distance." },
    { word: "tablette", hint: "Appareil portable a ecran tactile." },
    { word: "ecran", hint: "Surface qui affiche des informations." },
    { word: "clavier", hint: "Dispositif pour entrer des donnees sur un ordinateur." },
    { word: "souris", hint: "Dispositif pour deplacer le curseur a l'ecran." },
    { word: "batterie", hint: "Source d'energie utilisee pour alimenter les appareils." },
    { word: "chargeur", hint: "Appareil pour recharger un objet electronique." },
    { word: "carte", hint: "Objet utilise pour naviguer ou comme moyen de paiement." },
    { word: "internet", hint: "Reseau mondial permettant la communication et l'acces a l'information." },
    { word: "cafe", hint: "Boisson chaude obtenue a partir de grains torrefies." },
    { word: "the", hint: "Boisson chaude obtenue a partir de feuilles infusees." },
    { word: "eau", hint: "Liquide transparent et essentiel a la vie." },
    { word: "jus", hint: "Boisson extraite des fruits." },
    { word: "gazon", hint: "Plante souvent utilisee pour couvrir le sol des jardins." },
    { word: "jardin", hint: "Espace exterieur plante de fleurs et d'arbres." },
    { word: "cloche", hint: "Objet qui produit un son quand il est frappe." },
    { word: "lumiere", hint: "Ce qui rend les choses visibles." },
    { word: "ombre", hint: "Zone sombre creee par un obstacle bloquant la lumiere." },
    { word: "serpent", hint: "Reptile sans pattes, souvent redoute." },
    { word: "lion", hint: "Animal sauvage connu comme le roi de la jungle." },
    { word: "elephant", hint: "Animal terrestre connu pour sa taille et ses grandes oreilles." },
    { word: "girafe", hint: "Animal au long cou." },
    { word: "tigre", hint: "Grand felin aux rayures." },
    { word: "zebre", hint: "Animal ressemblant au cheval, avec des rayures noires et blanches." },
    { word: "requin", hint: "Poisson carnivore qui vit dans l'ocean." },
    { word: "dauphin", hint: "Mammifere marin tres intelligent." },
    { word: "poisson", hint: "Animal aquatique." },
    { word: "oiseaux", hint: "Animaux a plumes qui peuvent voler." }
];

  
// Variables globales
let selectedWord = '';
let displayedWord = '';
let guessedLetters = [];
let remainingGuesses = 6;
let score = 0;

// Fonction pour choisir un mot aléatoire
function getRandomWord() {
    const randomIndex = Math.floor(Math.random() * words.length);
    return words[randomIndex];
}

// Initialisation du jeu
function startGame() {
    remainingGuesses = 6;
    guessedLetters = [];
    document.getElementById("message").textContent = "";
    document.getElementById("message").classList.remove("win", "lose");
    document.getElementById("restart-button").style.display = "none";
    document.getElementById("remaining-guesses").textContent = remainingGuesses;
    document.getElementById("score-value").textContent = score;

    const randomWordObj = getRandomWord();
    selectedWord = randomWordObj.word.toLowerCase();
    const hint = randomWordObj.hint;

    displayedWord = selectedWord.split('').map(() => '_').join(' ');
    document.getElementById("word-display").textContent = displayedWord;
    document.getElementById("hint-display").textContent = `Indice : ${hint}`;

    createLetterButtons();
}

// Création des boutons de lettres
function createLetterButtons() {
    const lettersContainer = document.getElementById("letters-container");
    lettersContainer.innerHTML = '';
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';

    alphabet.split('').forEach(letter => {
        const button = document.createElement('button');
        button.textContent = letter;
        button.onclick = () => guessLetter(letter, button);
        lettersContainer.appendChild(button);
    });

    document.onkeydown = (e) => {
        const letter = e.key.toLowerCase();
        if (/^[a-z]$/.test(letter) && !guessedLetters.includes(letter)) {
            const buttons = lettersContainer.querySelectorAll('button');
            buttons.forEach(btn => {
                if (btn.textContent === letter) {
                    guessLetter(letter, btn);
                }
            });
        }
    };
}

// Gestion des lettres devinées
function guessLetter(letter, button) {
    if (guessedLetters.includes(letter)) return;

    guessedLetters.push(letter);
    button.disabled = true;

    if (selectedWord.includes(letter)) {
        button.classList.add("correct");
        updateDisplayedWord();
    } else {
        button.classList.add("incorrect");
        remainingGuesses--;
        document.getElementById("remaining-guesses").textContent = remainingGuesses;
        updateMessage(`Lettre incorrecte ! Chances restantes : ${remainingGuesses}`);
    }

    checkGameEnd();
}

// Mise à jour du mot affiché
function updateDisplayedWord() {
    displayedWord = selectedWord.split('').map(char => {
        return guessedLetters.includes(char) ? char : '_';
    }).join(' ');
    document.getElementById("word-display").textContent = displayedWord;
}

// Mise à jour du message
function updateMessage(message) {
    document.getElementById("message").textContent = message;
}

// Vérification de la fin du jeu
function checkGameEnd() {
    if (remainingGuesses === 0) {
        updateMessage(`Perdu ! Le mot était : ${selectedWord}`);
        document.getElementById("message").classList.add("lose");
        document.getElementById("score").classList.add("lose");
        score = 0; // Réinitialisation du score en cas de défaite
        document.getElementById("score-value").textContent = score;
        setTimeout(() => {
            document.getElementById("score").classList.remove("lose");
            showRestartButton();
        }, 2000); // Attendre 2 secondes avant de montrer le bouton
    } else if (!displayedWord.includes('_')) {
        score += 10; // Augmentation du score en cas de victoire
        document.getElementById("score-value").textContent = score;
        updateMessage(`Félicitations ! Score : ${score}`);
        document.getElementById("message").classList.add("win");
        setTimeout(startGame, 2000); // Passer au mot suivant après 2 secondes
    }
}

// Affichage du bouton "Recommencer"
function showRestartButton() {
    document.getElementById("restart-button").style.display = "block";
    const buttons = document.querySelectorAll(".letters-container button");
    buttons.forEach(button => button.disabled = true);
    document.onkeydown = null;
}

// Gestion du mode sombre
document.getElementById("theme-toggle").onclick = () => {
    document.body.classList.toggle("dark-mode");
    const btn = document.getElementById("theme-toggle");
    btn.textContent = btn.textContent === "Mode Sombre" ? "Mode Clair" : "Mode Sombre";
};

// Événement pour redémarrer
document.getElementById("restart-button").onclick = startGame;

// Démarrer le jeu au chargement
startGame();