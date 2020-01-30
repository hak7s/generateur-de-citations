/**
 * genere de nouvelles citations et demande a l'utilisateur le nombre de citation et le generateur a utiliser 
 */

function newCitation(){
    var number=getNumberCitations();
    var generator=selectGenerator();

    for (let i = 0; i < number; i++) {
        console.log(generateCitation(generator));
    }

}

/**
 * demande a l'utilisateur combien de citation il souhaite
 * @returns int nombre de citation que l'utilisateur souhaite
 */

function getNumberCitations(){
    var number = parseInt(prompt("Combien de citaton voulez vous compris entre 1 et 5"));
    console.log("Combien de citaton voulez vous compris entre 1 et 5");
    while (!(number > 0  && number < 6)) {
        console.error ("Le nombre doit etre compris entre 1 et 5");
        number = parseInt(prompt("Combien de citaton voulez vous ?"));
    }
    console.info(number)
    return number;
}

/**
 * demande a l'utilisateur le generateur qu'il souhaite utiliser
 * @returns array choix du generateur
 */

function selectGenerator(){
    var generatorName =parseInt(prompt("Choix du generateur 1 ou 2"));
    console.log("Choix du generateur 1 ou 2");
    while (!(generatorName == 1 || generatorName == 2)) {
        console.error("le choix doit etre compris entre 1 et 2");
        generatorName = parseInt(prompt("Choix du generateur 1 ou 2"));
    }
    console.info(generatorName)
    var index = generatorName -1 
    return generators[index];
}


function generateCitation(generator) {
    var phrase ="";
    for (var i = 0 ; i < generator.length; i++){
        phrase += getRandomValue(generator[i]) + " ";
    }
    return phrase;
        
}


function getRandomValue(tableau) {
    return tableau[Math.floor(Math.random() * tableau.length)];
}

var generator1 = [
    ["la vie", "le monde", "le bonheur"],
    [" est un mystère qu'il faut vivre", " est un ami qui ne trahit jamais", " c'est comme une bicyclette"],
    [" car nous ne penserons jamais de la même façon"," il faut avancer pour ne pas perdre l'équilibre", " pour les connaître, il faut les aimer"],
];
var generator2 = [
    ["vu", "quelle que soit", "avec"],
    [" la situation actuelle", " la crise de cette fin de siècle", " la conjoncture d'aujourd'hui"],
    [" il faut étudier toutes les solutions"," il serait bon d'imaginer le meilleur", " il faut voir la vie en rose"],
];

var generators= [
    generator1,generator2
];

