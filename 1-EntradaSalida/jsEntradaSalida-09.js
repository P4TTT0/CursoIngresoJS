/*
Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{
	let sueldoIngresado;
	let porcentajeIva;

	sueldoIngresado = document.getElementById('txtIdSueldo').value;

	sueldoIngresado = parseInt(sueldoIngresado);

	porcentajeIva = sueldoIngresado + (sueldoIngresado * 0.1);

	document.getElementById('txtIdResultado').value = porcentajeIva;
	
}
