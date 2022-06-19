var nombre;
nombre = prompt('Dime tu nombre ', '');
alert("Saludos " + nombre + ", lee las instrucciones de la pagina");

function dias ()
{
    var dias = ["lunes", "martes", "miércoles", "jueves", "viernes", 
    "sábado", "domingo"];
    var i;

    for(i=0;i<=6;i++)
    {
        document.write('<br>');
        document.write("dia " + (i+1) + ": "+dias[i]);
    }
    document.write('<br>');
    document.write('<br>');
    document.write("para volver a iniciar las funciones recarga la pagina");
}


