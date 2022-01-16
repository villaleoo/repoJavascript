alert("Bienvenido, este algoritmo mostrará un alert con un mensaje la cantidad de veces que usted le indique, ingresando un numero aleatorio.")
let dato = parseInt(prompt("ingrese un numero"))
for(num=1;num<=dato;num++){
    alert("Numero ingresado: "+ dato +"."+" Este mensaje se repetirá "+ dato +" veces, por ser éste el numero ingresado. " + "("+ num +").")
}