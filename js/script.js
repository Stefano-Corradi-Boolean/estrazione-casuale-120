const classe120 = [
  'Enrico Amerio',
  'Simone Aucello',
  'Nicola Bellini',
  'Dario Bennardino',
  'Eugenio Caiazzo',
  'Matteo Carola',
  'Alessia Ciabatti',
  'Patrizio Corcione',
  'Alessandro D\'Amato',
  'Daniele De Ieso',
  'Luigi Di Bella',
  'Natalí Di Marino',
  'Mirco Elena',
  'Davide Fois',
  'Silvio Giacomelli',
  'Ilaria Guarnieri',
  'Matteo Juri Impagliatelli',
  'Oltion Koceku',
  'Jacopo Lombardi',
  'Emiliana Manzo',
  'Guglielmo Marra',
  'Andrea Marroccu',
  'Stefano Metallo',
  'Alessandro Moroni',
  'Jomar Navarro',
  'Sara Nazli',
  'Benedetto Panarello',
  'Davide Piarulli',
  'Beatrice Rocchi',
  'Marco Romano',
  'Alessio Romano',
  'Giorgia Rondinelli',
  'Elena Ruscitto',
  'Laroussi Sarhane',
  'Alex Sibiriu',
  'Anna Elisabeth Spjut'
];

/*
1. inserire un addEventListener() al bottone "estrai"
2. al click estrarre un un numero random fra 0 e la lunghezza dell'array - 1
3. prendo l'elemento dell'array a indice num random estratto
4. lo stampo in pagina
*/

// 1.
const btn = document.getElementById('estrai');
btn.addEventListener('click', function(){
  // non deo fare array.lenngth - 1 perché arrotondo per difetto
  const randomNumber = Math.floor(Math.random() * classe120.length)
  const nomeEstratto = classe120[randomNumber]
  document.getElementById('nome-estratto').innerHTML = nomeEstratto
})

