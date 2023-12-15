
aux=document.getElementById("resumen");
aux2=document.getElementById("borrar");

aux.addEventListener('click',calcular);
aux2.addEventListener('click',resetear);

var precio=200;

function calcular()
{
var variable1 = document.getElementById("cant").value
var variable2 = document.getElementById("categ").value
var resultado = 0

switch (parseInt(variable2))
    {
        case 0:
            resultado=precio*variable1*0.2
            break;
        case 1:
            resultado=precio*variable1*0.5
            break;
        case 2:
            resultado=precio*variable1*0.85
            break;
}
document.getElementById("monto").innerHTML= resultado
}

function resetear()
{
    document.getElementById("cant").value= ""
    document.getElementById("categ").value= "0"
    document.getElementById("monto").innerHTML=""
    document.getElementById("nombre2").value= ''
    document.getElementById("apellido2").value= ''
    document.getElementById("correo2").value= ''
}