// Primeira ré
// Faça com que a função FirstReverse( str ) pegue o parâmetro str que está sendo passado e retorne a string na ordem inversa. Por exemplo: se a string de entrada for "Hello World and Coders", seu programa deve retornar a string sredoC dna dlroW olleH .

function FirstReverse(str) { 

  // code goes here  
  const stringReverse = str.split('').reverse().join('');
  return stringReverse; 

}