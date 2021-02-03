class Tabelas{

    init(conexao){
        console.log('Tabelas inicializadas!');
        this.conexao = conexao;
        this.criarAtendimentos();

    }

    criarAtendimentos(){
        const sql = 'CREATE TABLE IF NOT EXISTS Atendimentos (id int NOT NULL AUTO_INCREMENT, Cliente varchar(50) NOT NULL, pet varchar(20), servico varchar(20) NOT NULL, status varchar(20) NOT NULL, observacoes text, PRIMARY KEY(id))'

        this.conexao.query(sql, erro => {
            if(erro){
                console.log(erro);
            }else{
                console.log('Tabela Atendimentos criados com suscesso!');
            }
        })

    }

}

module.exports = new Tabelas;

