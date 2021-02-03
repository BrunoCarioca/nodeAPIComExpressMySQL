/**Imports da aplicação*/
const servConfig = require('./config/serveConfig.js');
const conexao = require('./infraestrutura/conexao.js');
const Tabelas = require('./infraestrutura/Tabelas.js');
/***********************/
/**verificando a coneção com o bd*/
conexao.connect(erro=>{
    if(erro){
        console.log(erro)
    }else{
        console.log('conectado com o banco de dados!');
        /**Criando Tabelas*/
        Tabelas.init(conexao);
        /**Roteando o servidor*/
        const app = servConfig();
        app.listen(3000, () => console.log('Server iniciado com suscesso!'));

    }
})
/***********************/

