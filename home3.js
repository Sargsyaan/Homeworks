//Home1
const number = ["1", "2", "3", "4"];
let i = 0;
let text = "";

while (number[i]) {
  text += number[i];
  i++;
}
//Home2
let result = []
    let number = +prompt();
    let mid=0;
    let sum=0;
    for(let i = 0; i< array.length; i++){
        while(number>9){
            mid=number%10;
            sum+=mid;
            number=(number-mid)/10;
            }
        
            result.push(array[i])
      }
// im codei mej sxal ka bayc pordzel em maximal chisht ashxatel))
//Home 3
let num=+prompt();
let str = num.toString();
let result = [str[0]];
  
for(let x=1; x<str.length; x++)
  {
    if((str[x-1]%2 === 0)&&(str[x]%2 === 0))
     {
      result.push('-', str[x]);
     }
    else
     {
      result.push(str[x]);
     }
  }
console.log(result.join(''));
//Home 5
function isPrime( n)
{
      if(n == 1 || n == 0) return false;
      for(var i = 2; i < n; i++)
      {
        if(n % i == 0) return false;
      }
      return true;
}
let N = 100;
  for(let i = 1; i <= N; i++)
  {
      if(isPrime(i)) {
        console.log( i );
      }
}