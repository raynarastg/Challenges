// Primeiro fatorial
// Faça com que a função FirstFactorial( num ) pegue o parâmetro num que está sendo passado e retorne o fatorial dele. Por exemplo: se num = 4, então seu programa deve retornar (4 * 3 * 2 * 1) = 24. Para os casos de teste, o intervalo será entre 1 e 18 e a entrada será sempre um número inteiro.

function FirstFactorial(num) { 
  // code goes here  
  let numMult = 1;
  for(let i =1; i<= num; i++){
   numMult *= i
 }
   return numMult; 
 
 }