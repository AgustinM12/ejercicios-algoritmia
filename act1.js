function fact(n) {

    let acumulador = n
    let contador = n
    let aux = n
  
    for (let index = 1; index <= n; index++) {
  
      console.log(index);
  
      for (let x = 1; x < contador - 1; x++) {
        acumulador += aux
  
        console.log(acumulador);
      }
  
      contador--
      aux = acumulador
    }
  
    return console.log("El resultado final es: ", acumulador);
  }
  
  
  fact(5)