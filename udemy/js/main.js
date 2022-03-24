
var nombre = "Daniel"
var altura = '170'
concat=nombre+" "+altura;
/*document.write(concat)*/
var datos =document.getElementById("datos");
datos.innerHTML=`<h1>Hola</h1>
    <h2>Mi nombre es: ${nombre}</h2>
    <h3>Mido: ${altura}</h3>
    `;

if(altura >=190){
    datos.innerHTML+=`<h1>Eres una persona alta</h1>`
}
else{
    datos.innerHTML+=`<h1>Eres una persona baja</h1>`
}

for(i=2000;i<=2020;i++){

    datos.innerHTML+=`<h2>Estamos en el año:`+i;
}

function MuestraMiNombre(nombre,altura){
    var datos =document.getElementById("datos");
    datos.innerHTML=`<h1>Hola</h1>
    <h2>Mi nombre es: ${nombre}</h2>
    <h3>Mido: ${altura}</h3>
    `;
}

MuestraMiNombre("Daniel","21")

var nombres=['Daniel', 'Jorge','Andrea'];
nombres.forEach((snombre) => {

    document.write(nombre+'<br/>');

});
