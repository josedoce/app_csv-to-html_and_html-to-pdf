class Formateme{
    static oCsv(csv){
        //separe por quebra de linhas \r e \n e ponha em um array
        const dados = csv.split('\r\n');
        //array hospedeiro
        const linhas = [];
        //para cada item no arrai, separe por virgulas e ponha em um array.
        dados.forEach((linha)=>{
            const lista = linha.split(',');
            linhas.push(lista);
        })
        return linhas;
    }
}
module.exports = Formateme;