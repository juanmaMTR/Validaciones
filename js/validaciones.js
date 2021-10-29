/*
    validaciones.js
    Script para validar un formulario
    @author Juan Manuel Toscano Reyes
    @License GPL v3 2021
*/

'use strict'

window.onload=iniciar

function iniciar(){
    //Formulario
    let formulario=document.forms[0]
    formulario.onsubmit=validar

    //Select
    //https://es.stackoverflow.com/questions/71985/cargar-un-select-dependiendo-de-otro-select-javascript-dom
    let select = document.getElementById('comunidad')
    select.onchange=elegirProvincia
}
//Función para validar el formulario
function validar(evento){
    console.log('Estoy validando');
    
    //Comprobamos que el checkbox de la politica está marcado
    if(!document.getElementById('politica').checked){
        visualizarMensaje('La politica de privacidad no está señalada',7)
        return false
    }
    //Comprobamos que en el apartado de apellidos hay dos palabras
    let palabrasapellidos=document.getElementById('apellidos').value.trim().split(' ')
    if(palabrasapellidos.length<2){
        document.getElementById('apellidos').style.border= '2px dashed red'
        return false
    }
    

    //Validad brocoli y asturiano
    if(document.getElementById('si').checked && document.getElementById('comunidad')==3){
        document.getElementById('comunidad').style.border='2px dashed red'
        return false
    }
}
//Función para elegir las provincias que vas a añadir
function elegirProvincia(){
    if(document.getElementById('comunidad').value==10){
        
        //Creo el Select
        let select=document.createElement('select')
        select.id='provincia'
        select.name='provincia'

        let div=document.getElementsByClassName('select')[0]
        div.appendChild(select)
        
        
        //Array de las Provincias
        let provincias=["Cáceres","Badajoz"]
        //Ordeno array alfabéticamente
        provincias.sort()

        //Recorremos el array
        for(let provincia in provincias){
            let opcion=document.createElement('option')
            opcion.text=provincias[provincia]
            select.appendChild(opcion)
        }
        

    }else{
        if(document.getElementById('provincia')){
            document.getElementById('provincia').remove()
        }
    }
}

function visualizarMensaje(mensaje, posicion){
    let p=document.createElement('p')
    let texto=document.createTextNode('* '+mensaje)

    p.appendChild(texto)
   // p.classList.add('mensajeerror')

    document.getElementsByClassName(`${posicion}`).appendChild(p)
}