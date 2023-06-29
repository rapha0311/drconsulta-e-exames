var palavras = document.getElementsByClassName('palavra');
var palavraArray = [];
var currentPalavra = 0;

palavras[currentPalavra].style.opacity = 1;
for (var i = 0; i < palavras.length; i++) {
  splitLetters(palavras[i]);
}

function changeWord() {
  var cw = palavraArray[currentPalavra];
  var nw = currentPalavra == palavras.length-1 ? palavraArray[0] : palavraArray[currentPalavra+1];
  for (var i = 0; i < cw.length; i++) {
    animateLetterOut(cw, i);
  }
  
  for (var i = 0; i < nw.length; i++) {
    nw[i].className = 'letter behind';
    nw[0].parentElement.style.opacity = 1;
    animateLetterIn(nw, i);
  }
  
  currentPalavra = (currentPalavra == palavraArray.length-1) ? 0 : currentPalavra+1;
}

function animateLetterOut(cw, i) {
  setTimeout(function() {
		cw[i].className = 'letter out';
  }, i*80);
}

function animateLetterIn(nw, i) {
  setTimeout(function() {
		nw[i].className = 'letter in';
  }, 340+(i*80));
}

function splitLetters(palavra) {
  var content = palavra.innerHTML;
  palavra.innerHTML = '';
  var letters = [];
  for (var i = 0; i < content.length; i++) {
    var letter = document.createElement('span');
    letter.className = 'letter';
    letter.innerHTML = content.charAt(i);
    palavra.appendChild(letter);
    letters.push(letter);
  }
  
  palavraArray.push(letters);
}

changeWord();
setInterval(changeWord, 4000);