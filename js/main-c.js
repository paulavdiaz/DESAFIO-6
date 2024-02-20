var cantidadDeGatos = 10
var cantidadDePasos = 4

var gato1 = '🐈'
var gato2 = '🐈‍⬛'


for (var i = 1; i <= cantidadDeGatos; i++) {
   
    var gato = i % 2 === 0 ? gato2 : gato1
      
    var patas = ''
    
    for (var j = 1; j <= cantidadDePasos; j++) {

        patas += '🐾'
    }

    console.log('Gato #' + i + ': ' + gato + ' ' + patas)
}