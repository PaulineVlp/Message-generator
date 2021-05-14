const chance = ['chance', 'malchance'];
const numero = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
const message = ['Il faut viser la lune, parce qu’au moins, si vous échouez, vous finirez dans les étoiles.',
'La meilleure façon de prédire l’avenir est de le créer.',
'Le désir de bien faire est un puissant moteur. Celui de faire du bien est plus puissant encore.',
'Croyez en vos rêves et ils se réaliseront peut-être. Croyez en vous et ils se réaliseront sûrement.',
'Celui qui veut réussir trouve un moyen. Celui qui veut rien faire trouve une excuse.',
'Le pessimisme est affaire d’humeur, l’optimisme est affaire de volonté.',
'Si vous pensez que vous ne valez pas grand-chose, vous ne trouverez personne pour augmenter votre prix.',
'Le seul endroit où le succès précède le travail est dans le dictionnaire.',
'Le but de la vie, ce n’est pas l’espoir de devenir parfait, c’est la volonté d’être toujours meilleur.',
'Dans cette vie, on ne peut pas réaliser de grandes choses. On ne peut que faire de petites choses avec beaucoup d’amour.'];


console.log('Aujourd\'hui est un jour de ' + chance[Math.floor(Math.random()*chance.length)] + '!');
console.log('Ton chiffre porte-bonheur est le ' + numero[Math.floor(Math.random()*numero.length)]);
console.log(message[Math.floor(Math.random()*message.length)]);