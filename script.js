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
    { word: "télévision", hint: "Appareil pour regarder des programmes vidéo." },
  
    { word: "souris", hint: "Petit rongeur souvent utilisé dans les dessins animés." },
    { word: "mer", hint: "Grand plan d'eau salée." },
    { word: "ciel", hint: "Ce que l'on voit au-dessus de nous, souvent bleu." },
    { word: "drapeau", hint: "Un symbole souvent utilisé pour représenter un pays." },
    { word: "soleil", hint: "L'astre qui brille dans le ciel pendant la journée." },
    { word: "étoile", hint: "Un corps céleste qui brille dans le ciel nocturne." },
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
    { word: "vache", hint: "Animal de ferme qui donne du lait." },
    { word: "poule", hint: "Animal qui pond des œufs." },
    { word: "canard", hint: "Oiseau qui vit souvent près des étangs." },
    { word: "merveille", hint: "Ce qui provoque l'émerveillement." },
  
    { word: "maillot", hint: "Vêtement souvent porté pour nager." },
    { word: "gâteau", hint: "Dessert sucré souvent mangé lors des anniversaires." },
    { word: "cinéma", hint: "Lieu où l'on va pour regarder des films." },
    { word: "hôtel", hint: "Endroit où l'on peut séjourner lorsqu'on est en voyage." },
    { word: "parapluie", hint: "Objet utilisé pour se protéger de la pluie." },
    { word: "pluie", hint: "Phénomène météorologique consistant en des gouttes d'eau." },
    { word: "neige", hint: "Précipitation formée de cristaux de glace." },
    { word: "riviere", hint: "Cours d'eau naturel." },
    { word: "lac", hint: "Grand étang d'eau douce." },
    { word: "village", hint: "Petite communauté rurale." },
  
    { word: "ville", hint: "Grande agglomération humaine." },
    { word: "marché", hint: "Lieu où l'on vend et achète des produits." },
    { word: "école", hint: "Lieu où l'on va pour étudier." },
    { word: "université", hint: "Établissement où l'on poursuit des études supérieures." },
    { word: "professeur", hint: "Personne qui enseigne." },
    { word: "étudiant", hint: "Personne qui est inscrite à l'école ou à l'université." },
    { word: "leçon", hint: "Cours ou enseignement donné." },
    { word: "livre", hint: "Objet contenant des pages avec du texte ou des images." },
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
    { word: "clé", hint: "Objet pour ouvrir ou fermer une serrure." },
  
    { word: "porte", hint: "Objet mobile pour fermer ou ouvrir un accès." },
    { word: "fenetre", hint: "Ouverture dans un mur pour voir dehors." },
    { word: "bague", hint: "Bijou souvent porté au doigt." },
    { word: "bracelet", hint: "Bijou porté autour du poignet." },
    { word: "collier", hint: "Bijou porté autour du cou." },
    { word: "montre", hint: "Objet pour mesurer le temps." },
    { word: "chaussure", hint: "Objet que l'on porte pour protéger les pieds." },
    { word: "chapeau", hint: "Accessoire porté sur la tête." },
    { word: "écharpe", hint: "Vêtement porté autour du cou pour se protéger du froid." },
    { word: "téléphone", hint: "Appareil permettant de communiquer à distance." },
  
    { word: "ordinateur", hint: "Machine utilisée pour effectuer diverses tâches." },
    { word: "tablette", hint: "Appareil portable à écran tactile." },
    { word: "écran", hint: "Surface qui affiche des informations." },
    { word: "clavier", hint: "Dispositif pour entrer des données sur un ordinateur." },
    { word: "souris", hint: "Dispositif pour déplacer le curseur à l'écran." },
    { word: "batterie", hint: "Source d'énergie utilisée pour alimenter les appareils." },
    { word: "chargeur", hint: "Appareil pour recharger un objet électronique." },
    { word: "carte", hint: "Objet utilisé pour naviguer ou comme moyen de paiement." },
    { word: "internet", hint: "Réseau mondial permettant la communication et l'accès à l'information." },
    { word: "café", hint: "Boisson chaude obtenue à partir de grains torréfiés." },
  
    { word: "thé", hint: "Boisson chaude obtenue à partir de feuilles infusées." },
    { word: "eau", hint: "Liquide transparent et essentiel à la vie." },
    { word: "jus", hint: "Boisson extraite des fruits." },
    { word: "gazon", hint: "Plante souvent utilisée pour couvrir le sol des jardins." },
    { word: "jardin", hint: "Espace extérieur planté de fleurs et d'arbres." },
    { word: "cloche", hint: "Objet qui produit un son quand il est frappé." },
    { word: "lumière", hint: "Ce qui rend les choses visibles." },
    { word: "ombre", hint: "Zone sombre créée par un obstacle bloquant la lumière." },
    { word: "soleil", hint: "Étoile autour de laquelle tourne la Terre." },
    { word: "cuisine", hint: "Lieu de la maison où on prépare les repas." },
  
    { word: "serpent", hint: "Reptile sans pattes, souvent redouté." },
    { word: "lion", hint: "Animal sauvage connu comme le roi de la jungle." },
    { word: "éléphant", hint: "Animal terrestre connu pour sa taille et ses grandes oreilles." },
    { word: "girafe", hint: "Animal au long cou." },
    { word: "tigre", hint: "Grand félin aux rayures." },
    { word: "zèbre", hint: "Animal ressemblant au cheval, avec des rayures noires et blanches." },
    { word: "requin", hint: "Poisson carnivore qui vit dans l'océan." },
    { word: "dauphin", hint: "Mammifère marin très intelligent." },
    { word: "poisson", hint: "Animal aquatique." },
    { word: "oiseaux", hint: "Animaux à plumes qui peuvent voler." },
  
    { word: "pain", hint: "Aliment de base fait à partir de farine." },
    { word: "viande", hint: "Aliment provenant d'animaux." },
    { word: "légume", hint: "Plante consommée comme nourriture." },
    { word: "fruit", hint: "Partie comestible d'une plante contenant des graines." },
    { word: "riz", hint: "Céréale souvent servie avec les plats." },
    { word: "pomme", hint: "Fruit rond souvent rouge, vert ou jaune." },
    { word: "banane", hint: "Fruit jaune et courbé." },
    { word: "orange", hint: "Fruit citrus souvent orange." },
    { word: "poire", hint: "Fruit doux et juteux." },
    { word: "tomate", hint: "Fruit souvent utilisé en salade." }
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