const el = document.getElementById('headline');
const words = el.textContent.split(' ');
el.textContent = '';
let i = 0;

function showWord() {
  if (i < words.length) {
    el.textContent += words[i] + (i < words.length - 1 ? ' ' : '');
    i++;
    setTimeout(showWord, 600); 
  }
}
showWord();
