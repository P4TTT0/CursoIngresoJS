/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resto entre el dividendo y el divisor.
ej.: "El resto es 0 ."*/
function SacarResto()
{
	let dividendoIngresado;
	let divisorIngresado;
	let restoDivision;

	dividendoIngresado = document.getElementById('txtIdNumeroDividendo').value;
	divisorIngresado = document.getElementById('txtIdNumeroDivisor').value;

	dividendoIngresado = parseInt(dividendoIngresado);
	divisorIngresado = parseInt(divisorIngresado);

	restoDivision = dividendoIngresado % divisorIngresado;

	alert("El resto es " + restoDivision);

}
