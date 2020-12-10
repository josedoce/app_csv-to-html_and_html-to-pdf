const fs = require('fs');
const util = require('util');
//com o util, posso transformar funções callbacks em promises retornaveis e assincronas

class Leiame{
    constructor(){
        this.leitura = util.promisify(fs.readFile);
    }
    async NaPastaEsteArquivo(arquivo){
        try{
            return await this.leitura(arquivo, "utf8")
        }catch(erro){
            return undefined;
        }
    }
}
module.exports = Leiame;