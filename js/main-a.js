var cantidadDeGatos = 10

var gato1 = '😺'
var gato2 = '😸'
var gato3 = '😹'

var contador = 0

for (var i = 1; i <= cantidadDeGatos; i++) {
        
    switch (contador) {
        case 0:
            console.log('Gato #' + i +': ' + gato1)
            break
        case 1:
            console.log('Gato #' + i +': ' + gato2)
            break
        case 2:
            console.log('Gato #' + i +': ' + gato3)
            break
    }
    
    if (contador >= 2) {
        contador = 0
    } else {
        contador++
    }  
}