/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()
{
	let primerNumeroIngresado;
	let segundoNumeroIngresado;
	let sumaNumeros

	primerNumeroIngresado = document.getElementById('txtIdNumeroUno').value;
	segundoNumeroIngresado = document.getElementById('txtIdNumeroDos').value;

	primerNumeroIngresado = parseInt(primerNumeroIngresado);
	segundoNumeroIngresado = parseInt(segundoNumeroIngresado);

	sumaNumeros = primerNumeroIngresado + segundoNumeroIngresado;

	alert("La suma es: " + sumaNumeros);	
}

function restar()
{
	let primerNumeroIngresado;
	let segundoNumeroIngresado;
	let restaNumeros

	primerNumeroIngresado = document.getElementById('txtIdNumeroUno').value;
	segundoNumeroIngresado = document.getElementById('txtIdNumeroDos').value;

	restaNumeros = primerNumeroIngresado - segundoNumeroIngresado;

	alert("La resta es: " + restaNumeros);	

	
}

function multiplicar()
{ 
	let primerNumeroIngresado;
	let segundoNumeroIngresado;
	let multiplicarNumeros

	primerNumeroIngresado = document.getElementById('txtIdNumeroUno').value;
	segundoNumeroIngresado = document.getElementById('txtIdNumeroDos').value;	

	multiplicarNumeros = primerNumeroIngresado * segundoNumeroIngresado;

	alert("La multiplicacion es: " + multiplicarNumeros);	

	
}

function dividir()
{
	let primerNumeroIngresado;
	let segundoNumeroIngresado;
	let dividirNumeros

	primerNumeroIngresado = document.getElementById('txtIdNumeroUno').value;
	segundoNumeroIngresado = document.getElementById('txtIdNumeroDos').value;

	dividirNumeros = primerNumeroIngresado / segundoNumeroIngresado;

	alert("La división es: " + dividirNumeros);	

}

