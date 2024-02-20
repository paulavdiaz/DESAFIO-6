
var cantidadDeGatos = 5
var cantidadDePasos = 3


for (var i = 1; i <= cantidadDeGatos; i++) {
    var mensaje = "Gato #" + i + ": 🐈 "
    
    for (var j = 1; j <= cantidadDePasos; j++) {
        
        mensaje += "🐾"
    }

    console.log(mensaje)
}