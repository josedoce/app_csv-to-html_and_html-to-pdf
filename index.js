const Leia = require('./leitor/Leiame');
const Formateme = require('./leitor/Formateme');
const Tabelame = require('./leitor/Tabela');
const HTML = require('./leitor/HtmlParser');
const Escritor = require('./leitor/SalveHTML');
const FazPdf = require('./leitor/DoPDF');

const Leiame = new Leia();
const Salvame = new Escritor();

async function main(csv, html){
    let dados = await Leiame.NaPastaEsteArquivo('./'+csv);
    let formatado = Formateme.oCsv(dados);
    let tabela = new Tabelame(formatado);
    let pagina = await HTML.Parse(tabela);
    //csv to html
    Salvame.esteDado(html+'.html',pagina);
    //html to pdf
    FazPdf.DesteHtml(html+'.PDF', pagina);
}
main('nomes.csv','pessoitas');

