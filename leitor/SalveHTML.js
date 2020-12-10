const fs = require('fs');
const util = require('util');


class Salvame{
    constructor(){
        this.escrita = util.promisify(fs.writeFile);
    }
    async esteDado(filename, data){
        try{
            await this.escrita(filename, data);
            return true;
        }catch(erro){
            return false;
        }
    }
}
module.exports = Salvame;