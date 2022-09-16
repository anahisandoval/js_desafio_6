/*Representacion de turnos de una sala de ensayo
Los turnos son sabados y domingos desde las 14hs hasta las 18 hs. Cada turno es de 2 horas
0 significa libre, 1 es ocupado*/

//Array que representa los turnos de los dias sábado y domingo
//Se agregó una nueva funcionalidad en el menú para seleccionar el horario o que la aplicacion de el primer horario dispobible
//

//const dias=[0,0,0,0,0,0];
//const horario=["Sábado 14 hs","Sábado 16 hs","Sábado 18 hs","Domingo 14 hs","Domingo 16 hs","Domingo 18 hs"];


//array que contendrá los horarios de la sala
const l_horarios=[]; 
//Constructor del objeto horario
class Horario {
    constructor(dia, hora, ocupado) {
        this.dia = dia;
        this.hora = hora;
        this.ocupado = ocupado;
    }
}

l_horarios.push(new Horario("Sábado","14 hs",0));
l_horarios.push(new Horario("Sábado","16 hs",0));
l_horarios.push(new Horario("Sábado","18 hs",0));
l_horarios.push(new Horario("Domingo","14 hs",0));
l_horarios.push(new Horario("Domingo","16 hs",0));
l_horarios.push(new Horario("Domingo","18 hs",0));
localStorage.setItem('turnos', JSON.stringify(l_horarios));

const l_persons=[];   //array que guarda las personas que se registran

//Constructor del objeto persona
class Persona {
    constructor(nombre, banda, genero, integrantes) {
        this.nombre = nombre;
        this.banda = banda;
        this.genero = genero;
        this.integrantes = integrantes;
    }
}


function solicitarDatos(pos){
    let nombre=prompt("Nombre y apellido");
    let banda=prompt("Nombre de la banda");
    let genero=prompt("Género que tocan");
    let integrantes=prompt("Cantidad de integrantes");
    const datos = new Persona(nombre,banda,genero,integrantes);
    l_persons[pos]=datos;
}

function mostrarDatos(posicion){

    alert("Se confirma la reserva con los siguientes datos: \n Banda: "+l_persons[posicion].banda+ "\n Género musical: "+l_persons[posicion].genero+"\n Cantidad de integrantes: "+l_persons[posicion].integrantes);

}

function buscarPrimerDiaLibre(lista){
    let i =0;
    while(i < lista.length && lista[i].ocupado!=0){
            i++;
        }
    return i;        
}

function mostrarEnDOM(){
   
        let contenedor=document.createElement("div");
        contenedor.innerHTML= '<h2> Nombre: '+ una_persona.nombre+'</h2> <p> Banda:'  + una_persona.banda +'</p><p> Género: '+ una_persona.genero+'</p> <p> Integrantes: '+una_persona.integrantes+'<h2>';
        document.body.appendChild(contenedor);
    
}

let miFormulario = document.getElementById("formulario");
miFormulario.addEventListener("submit",validarFormulario);

function validarFormulario(e) {
    e.preventDefault();
    let opcion=document.querySelector("select[name='turnos']");
    entrada = opcion.value;
    
    let almacenados = localStorage.getItem('turnos');
    let turnos_almacenados = JSON.parse(almacenados);

    switch (entrada)
                {
                    case "Sábado - 14 hs":
                        if(turnos_almacenados[0].ocupado==0)
                        {
                            alert("El horario está disponible");
                            let resp = prompt("Lo reserva? Presioná 'S' para SI o 'N' para NO");
                            if (resp.toUpperCase()=="S")
                            {
                                solicitarDatos(0);
                                turnos_almacenados[0].ocupado=1;
                                localStorage.setItem('turnos', JSON.stringify(turnos_almacenados));
                                mostrarDatos(0);
                                let contenedor=document.createElement("div");
                                contenedor.innerHTML= '<h2> Nombre: '+ l_persons[0].nombre+'</h2> <p> Banda:'  + l_persons[0].banda +'</p><p> Género: '+ l_persons[0].genero+'</p> <p> Integrantes: '+l_persons[0].integrantes+'<h2>';
                                document.body.appendChild(contenedor);
                            }
                        }
                        else
                        {
                            alert("El horario no está disponible")
                        }
                        break;
                    case "Sábado - 16 hs":
                        if(turnos_almacenados[1].ocupado==0)
                        {
                            alert("El horario está disponible")
                            let resp = prompt("Lo reserva? Presioná 'S' para SI o 'N' para NO");
                            if (resp.toUpperCase()=="S")
                            {
                                solicitarDatos(1);
                                turnos_almacenados[1].ocupado=1;
                                localStorage.setItem('turnos', JSON.stringify(turnos_almacenados));
                                mostrarDatos(1);
                                let contenedor=document.createElement("div");
                                contenedor.innerHTML= '<h2> Nombre: '+ l_persons[1].nombre+'</h2> <p> Banda:'  + l_persons[1].banda +'</p><p> Género: '+ l_persons[1].genero+'</p> <p> Integrantes: '+l_persons[1].integrantes+'<h2>';
                                document.body.appendChild(contenedor);
                            }
                        }
                        else
                        {
                            alert("El horario no está disponible")
                        }
                        break;
                        case "Sábado - 18 hs":
                            if(turnos_almacenados[2].ocupado==0)
                            {
                                alert("El horario está disponible");
                                let resp = prompt("Lo reserva? Presioná 'S' para SI o 'N' para NO");
                                if (resp.toUpperCase()=="S")
                                {
                                    solicitarDatos(2);
                                    turnos_almacenados[2].ocupado=1;
                                    localStorage.setItem('turnos', JSON.stringify(turnos_almacenados));
                                    mostrarDatos(2);
                                    let contenedor=document.createElement("div");
                                    contenedor.innerHTML= '<h2> Nombre: '+ l_persons[2].nombre+'</h2> <p> Banda:'  + l_persons[2].banda +'</p><p> Género: '+ l_persons[2].genero+'</p> <p> Integrantes: '+l_persons[2].integrantes+'<h2>';
                                    document.body.appendChild(contenedor);
                                   
                                }
                            }
                            else
                            {
                                alert("El horario no está disponible")
                            }   
                            break;
                        case "Domingo - 14 hs":
                            if(turnos_almacenados[3].ocupado==0)
                            {
                                alert("El horario está disponible");
                                let resp = prompt("Lo reserva? Presioná 'S' para SI o 'N' para NO");
                                if (resp.toUpperCase()=="S")
                                {
                                    solicitarDatos(3);
                                    turnos_almacenados[3].ocupado=1;
                                    localStorage.setItem('turnos', JSON.stringify(turnos_almacenados));
                                    mostrarDatos(3);
                                    let contenedor=document.createElement("div");
                                    contenedor.innerHTML= '<h2> Nombre: '+ l_persons[3].nombre+'</h2> <p> Banda:'  + l_persons[3].banda +'</p><p> Género: '+ l_persons[3].genero+'</p> <p> Integrantes: '+l_persons[3].integrantes+'<h2>';
                                    document.body.appendChild(contenedor);
                                }
                            }
                            else
                            {
                                alert("El horario no está disponible")
                            }
                            break;
                        case "Domingo - 16 hs":
                            if(turnos_almacenados[4].ocupado==0)
                            {
                                alert("El horario está disponible");
                                let resp = prompt("Lo reserva? Presioná 'S' para SI o 'N' para NO");
                                if (resp.toUpperCase()=="S")
                                {
                                    solicitarDatos(4);
                                    turnos_almacenados[4].ocupado=1;
                                    localStorage.setItem('turnos', JSON.stringify(turnos_almacenados));
                                    mostrarDatos(4);
                                    let contenedor=document.createElement("div");
                                    contenedor.innerHTML= '<h2> Nombre: '+ l_persons[4].nombre+'</h2> <p> Banda:'  + l_persons[4].banda +'</p><p> Género: '+ l_persons[4].genero+'</p> <p> Integrantes: '+l_persons[4].integrantes+'<h2>';
                                    document.body.appendChild(contenedor);
                                }
                            }
                            else
                            {
                                alert("El horario no está disponible")
                            }
                            break;
                        case "Domingo - 18 hs":
                            if(turnos_almacenados[5].ocupado==0)
                            {
                                alert("El horario está disponible");
                                let resp = prompt("Lo reserva? Presioná 'S' para SI o 'N' para NO");
                                if (resp.toUpperCase()=="S")
                                {
                                    solicitarDatos(5);
                                    turnos_almacenados[5].ocupado=1;
                                    localStorage.setItem('turnos', JSON.stringify(turnos_almacenados));
                                    mostrarDatos(5);
                                    let contenedor=document.createElement("div");
                                    contenedor.innerHTML= '<h2> Nombre: '+ l_persons[5].nombre+'</h2> <p> Banda:'  + l_persons[5].banda +'</p><p> Género: '+ l_persons[5].genero+'</p> <p> Integrantes: '+l_persons[5].integrantes+'<h2>';
                                    document.body.appendChild(contenedor);
                                }
                            }
                            else
                            {
                                alert("El horario no está disponible")
                            }
                            break;
                        default:
                            alert("La opción ingresada no es válida");
                            break;
                    }
                       
}


