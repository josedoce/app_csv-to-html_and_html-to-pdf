class Tabela{

    constructor(arr){
        this.cabecalho = arr[0];
        //remover indice do array
        arr.shift();
        this.corpo = arr;
    }
    get colunas(){
        return this.cabecalho.length;
    }
    get linhas(){
        return this.corpo.length;
    }
}
module.exports = Tabela;