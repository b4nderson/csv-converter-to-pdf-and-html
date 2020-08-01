const htmlPdf = require("html-pdf-node")
const { writeFileSync } = require("fs")

class PdfWriter {

    static async WritePDF(destinationPath, html) {

        const options = { format: 'A4' }
        const file = { 
            content: html
        }

        const fullDestinationPath = destinationPath.includes(".pdf") ? destinationPath : `${destinationPath}.pdf` 

        try {
            const pdfBuffer = await htmlPdf.generatePdf(file, options)
            writeFileSync(fullDestinationPath,  pdfBuffer)
        } catch(pdfError) {
            console.log(pdfError)
        }
    }

}

module.exports = PdfWriter