function soma() {
    var somador = 0
    for (var i = 0; i < arguments.length; i++) { 
     somador = somador + arguments[i]
    }
    return somador

}

resutaldo1 = soma(1, 2)
alert(resutaldo1)

resultado2 = soma(1, 2, 3, 4)
alert(resultado2)

resultado3 = soma(2, 3, 4, 5, 6, 7, 8)
alert(resultado3)

resultado4 = soma(2,34,5,6,7,8,98,90,3,3,4,4,56,7,78,7,8,9)
alert(resultado4)