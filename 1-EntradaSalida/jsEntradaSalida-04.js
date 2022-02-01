/* 
Debemos lograr tomar un dato por 'PROMPT' 
y lo muestro por 'ID' al presionar el botón 'mostrar'
*/
function mostrar()
{
	let nombreIngresado = prompt("¿Cual es tu nombre?")
	document.getElementById('txtIdNombre').value = nombreIngresado
}

