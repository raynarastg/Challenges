// Palavra mais longa
// Faça com que a função LongestWord( sen ) pegue o parâmetro sen que está sendo passado e retorne a palavra mais longa na string. Se houver duas ou mais palavras com o mesmo comprimento, retorne a primeira palavra da string com esse comprimento. Ignore a pontuação e assuma que sen não estará vazio. As palavras também podem conter números, por exemplo "Hello world123 567"

function LongestWord(sen) { 
  // code goes here  
 const palavras = sen.split(' ');
 let maiorPalavra = palavras[0];

 for(let i = 1; i <= palavras.length; i++){
   if(palavras[i] > maiorPalavra){
     maiorPalavra = palavras[i];
   }
 }
  // return sen; 
  return maiorPalavra
}