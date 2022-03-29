'use strict'

function BinarioADecimal(num) {
  // tu codigo aca
   var s=num.toString();
   var bin=0;
   var x=s.length-1;
   for(let i=0;i<s.length;i++ ){
      bin=bin + (s[i] * Math.pow(2,x));
      x=x-1;
    }
   return bin;
}

function DecimalABinario(num) {
  // tu codigo aca
  var x;
  var sum=0;
  var mul=1;
  do{
    x=num%2;
    num=Math.floor(num/2);
    sum=sum + x*mul;
    mul=mul*10;
  }while(num>1)
  sum=sum + 1*mul;
  return sum.toString();
}


module.exports = {
  BinarioADecimal,
  DecimalABinario,
}