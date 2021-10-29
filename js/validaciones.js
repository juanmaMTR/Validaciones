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
    //https://donnierock.com/2011/11/05/validar-un-dni-con-javascript/
    let validaciondni= /^\d{8}[a-zA-Z]$/
    let numero=null
    let letr=null
    let letra='TRWAGMYFPDXBNJZSQVHLCKET'
    if(validaciondni.test(formulario.nif.value)== true){

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
        

    }
}
