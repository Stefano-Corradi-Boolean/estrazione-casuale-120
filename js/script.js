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
  'Anna Spjut'
];

const nomiEstratti = [];

/*
1. inserire un addEventListener() al bottone "estrai"
2. al click estrarre un un numero random fra 0 e la lunghezza dell'array - 1
3. prendo l'elemento dell'array a indice num random estratto
4. lo stampo in pagina
*/

// 1.
const btn = document.getElementById('estrai');
const output = document.getElementById('nome-estratto')

// richiamo la funzione senza tonde
btn.addEventListener('click', handleBtnExtraction);



// FUNCTIONS ////////////////////////////////

function handleBtnExtraction(){
  btn.innerHTML = 'estrai';
  let estrazioneValida = false;
  // finche il nome non è valido faccio un'altra estrazione
  while(!estrazioneValida){
    const randomNumber = getRandomNumber(0, classe120.length - 1);
    const nomeEstratto = classe120[randomNumber];
    // verifico se il nome è presente nll'elenco dei nomi estratti
    estrazioneValida = !nomiEstratti.includes(nomeEstratto);

    // if(nomiEstratti.includes(nomeEstratto) === false){
    //   estrazioneValida = true;
    // }

    // se il nome è valido lo aggiungo all'elenco degli estritti
    if(estrazioneValida){
      nomiEstratti.push(nomeEstratto)
      output.innerHTML = nomeEstratto;
    }
    // se la lunghezza dei nomi estratti è uguale alla lunghezza dell'elenco vuol dire che li ho estratti tutti
    if(nomiEstratti.length === classe120.length && !estrazioneValida){
      btn.innerHTML = 'ricomincia';
      output.innerHTML = 'Tutti i nomi sono stati estratti';
      // restto l'array dei nomi estrtti
      nomiEstratti.splice(0)
      estrazioneValida = true;
    }

  }
}

function getRandomNumber(min, max){
  return Math.floor(Math.random() * (max - min + 1) + min);
}
