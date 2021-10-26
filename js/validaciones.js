/*
    validaciones.js
    Script para validar un formulario
    @author Juan Manuel Toscano Reyes
    @License GPL v3 2021
*/

'use strict'

window.onload=iniciar

function iniciar(){
    let formulario=document.forms[0]
    formulario.onsubmit=validar
}

function validar(evento){
    console.log('Estoy validando');
    //Comprobamos que el checkbox de la politica está marcado
    if(!document.getElementById('politica').checked){
        alert('La politica de privacidad no está señalada')
        return false
    }
    //Compruebo el campo de Nombre
    if(document.getElementById('nombre').length <2){
        return false
    }

    //evento.preventDefault()
    //return false
}