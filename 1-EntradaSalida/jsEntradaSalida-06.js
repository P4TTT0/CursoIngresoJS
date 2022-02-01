/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
function sumar()
{
	let primerNumeroIngresado;
	let segundoNumeroIngresado;
	let sumaNumeros;

	primerNumeroIngresado = document.getElementById('txtIdNumeroUno').value;
	segundoNumeroIngresado = document.getElementById('txtIdNumeroDos').value;

	primerNumeroIngresado = parseInt(primerNumeroIngresado);
	segundoNumeroIngresado = parseInt(segundoNumeroIngresado);

	sumaNumeros = primerNumeroIngresado + segundoNumeroIngresado;

	alert("La suma da un total de " desumaNumeros);
}


