const pdf = require('html-pdf');

class FacaPdf{
    static DesteHtml(filename, html){
        pdf.create(html, {}).toFile(filename, (erro)=>{});
    }
}

module.exports = FacaPdf;