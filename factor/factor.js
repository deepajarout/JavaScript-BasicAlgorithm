
function factorization(number){
    let num=1;
   for(let i =number;i>0;i--){
      console.log(i); 
      num = num * i;
      
   }
   return num
}
console.log(factorization(5))


function recfactor(number){
if(number === 0){
    return 1
}
   
     return   number * recfactor(number-1);

  
}
console.log(recfactor(5))