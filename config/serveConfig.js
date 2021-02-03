/** Importe da aplicação */
const express = require('express'); //importando o framework express.
const consign = require('consign'); //importando o framework consign.
const bodyParser = require('body-parser');//importando o framework body-parser.
/****************************************/

module.exports = ()=>{
    
    let servidor = express();//criando servidor!
    servidor.use(bodyParser.json())//adicionando bibliotecas externas ao express(servidor);
    servidor.use(bodyParser.urlencoded({extended: true})); 
    consign().include('controllers').into(servidor);
    return servidor
}

