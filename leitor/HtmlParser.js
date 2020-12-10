const ejs = require('ejs');

class HTML{
    static async Parse(table){
        return await ejs.renderFile('./table.ejs',{
            header: table.cabecalho,
            rows: table.corpo
        })
    }
}

module.exports = HTML;