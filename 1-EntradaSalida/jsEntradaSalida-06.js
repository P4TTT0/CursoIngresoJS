/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
function sumar()
{
	let primerNumeroIngresado
	let segundoNumeroIngresado
	let sumaNumeros

	primerNumeroIngresado = document.getElementById('txtIdNumeroUno').value;
	segundoNumeroIngresado = document.getElementById('txtIdNumeroDos').value;

	sumaNumeros = parseInt (primerNumeroIngresado) + parseInt (segundoNumeroIngresado)

	alert(sumaNumeros);
}


