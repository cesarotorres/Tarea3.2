<!--Cesar O. Torres Rodriguez
<!--/28/20222-->
  <!--Tarea 3.2 Assessment-->
    <!--conversion.js-->
function Temperatura ()
{
  var TempC = document.getElementById("celcius").value;
  var TempF;
  TempF = 32 + (TempC*9/5);
 document.getElementById("convert").innerHTML = TempC + " es " + TempF +" grados Fahrenheit";
}
function Borrar(){
  document.getElementById("convert").innerHTML ="";
  document.getElementById("Celcius").value="";
}
