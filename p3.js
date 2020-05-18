function palindromo(cadena) {
    
    var obj = {};
    if(cadena.length === 1) {
      return true;
    }
    var letras = cadena.split('');
    
    for(var i = 0; i < letras.length; i++) {
      if(obj.hasOwnProperty(letras[i]) === false){
        obj[letras[i]] = 1
        continue;
      }
      obj[letras[i]]++
    }
     
   var impares = 0;
   for(var prop in obj) {
     
    if(obj[prop] % 2 === 1) {
      impares++
    }
   }
     
  if(impares >= 2) {
    return false
  } else {
    return true
  }
}

console.log(palindromo("aabbc"))
console.log(palindromo("abcd"))
console.log(palindromo("baa"))