const frequenciasDAO = require('../model/DAO/frequencia')

const message = require('../modulo/config')

const { application } = require('express')

const getSomaFaltas = async function (id_matricula){

    try{

        let idMatricula = id_matricula

        let frequenciaJson = {}


        if(idMatricula == '' || idMatricula == null || idMatricula == undefined || isNaN(idMatricula)){
            return message.ERROR_INVALID_ID
        }else{
            let dadosFrequencia = await frequenciasDAO.somarFaltas(idMatricula)

            if(dadosFrequencia){
                frequenciaJson.faltas = dadosFrequencia
                frequenciaJson.status_code = 200

                return frequenciaJson

            }else{
                ERROR_INTERNAL_SERVER_DB
            }
        }

    }catch(error){
        console.log(error);
        return message.ERROR_INTERNAL_SERVER
    }
}

const setInserirFrequencia = async function (dadosFrequencia, contentType){

  
    try{
        if(String(contentType).toLowerCase() == 'application/json'){
            let frequenciaJson = {}

            if(
                dadosFrequencia.data == null || dadosFrequencia.data == undefined || dadosFrequencia.data == ''|| dadosFrequencia.data.length > 10 ||
                dadosFrequencia.status == null || dadosFrequencia.status == undefined || dadosFrequencia == '' || dadosFrequencia.status.length > 1 ||
                dadosFrequencia.id_matricula == null || dadosFrequencia.id_matricula == undefined || dadosFrequencia.id_matricula == '' ||
                dadosFrequencia.id_disciplina == null || dadosFrequencia.id_disciplina == undefined || dadosFrequencia.id_disciplina == ''
            ){

                return message.ERROR_REQUIRED_FIELDS
                
            }else{
                
                let novaFrequencia = await frequenciasDAO.insertFrequencia(dadosFrequencia)
                if(novaDisciplina){

                    let idFrequencia = await frequenciasDAO.selectLastId()
                    dadosFrequenciaa.id = idFrequencia[0].id

                    frequenciaJson.Frequenciaa = dadosFrequencia
                    frequenciaJson.message = message.SUCESS_CREATED_ITEM.message
                    frequenciaJson.status_code = message.SUCESS_CREATED_ITEM.status_code

                     
                    return FrequenciaaJson
                }
            }

        } else {

            message.ERROR_CONTENT_TYPE
        }

    }catch(error){
        console.log(error);
        return message.ERROR_INTERNAL_SERVER
    }
}





module.exports = {
    getSomaFaltas,
    setInserirFrequencia
}