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
        alert('La politica de privacidad no está señalada')
        return false
    }
    //Comprobamos que en el apartado de apellidos hay dos palabras
    let palabrasapellidos=document.getElementById('apellidos').value.split(' ')
    if(palabrasapellidos.length<2){
        document.getElementById('apellidos').style.border= '2px dashed red'
        return false
    }
    //Validamos el dni o nif
    let validaciondni=/(^([0-9]{8,8}\-[A-Z])|^)$/
    if(!(validaciondni.test(formulario.nif.value))){
        document.getElementById('nif').style.border= '2px dashed red'
        return false
    }

    //evento.preventDefault()
    //return false
}
//Función para elegir las provincias que vas a añadir
function elegirProvincia(){
    if(document.getElementById('comunidad').value==10){
        
        //Creo el Select
        let select=document.createElement('select')
        select.id='provincia'
        select.name='provincia'
        
        //Array de las Provincias
        let provincias=["Cáceres","Badajoz"]
        //Ordeno array alfabéticamente
        provincias.sort()
        //Pasamos el array y el select a otra funcion
        addOptions("provincia", provincias)


    }
}
//Funcion que agrega las provincias al select
function addOptions(domElement, provincias){
    let selector=document.getElementsByName(domElement)[0]
    //Recorremos el array
    for(provincia in provincias){
        let opcion=document.createElement('option')
        opcion.text=provincias[provincia]
        selector.add(opcion)
    }
}