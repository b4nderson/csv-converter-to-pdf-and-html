const Reader = require("./modules/Reader.js")
const Processor = require("./modules/Processor.js")
const Table = require("./modules/Table.js")
const HtmlParser = require("./modules/HtmlParser.js")
const Writer = require("./modules/Writer.js")
const PdfWriter = require("./modules/PdfWriter.js")

class Converter {
    async ProcessingToHTML(filePath) {
        const reader = new Reader()
        const data = reader.Read(filePath)

        if (data) {
            const processedData = Processor.Process(data)
            const users = new Table(processedData)
            const processedHtml = await HtmlParser.Parse(users)
            return processedHtml
        } 

        process.exit()
    }

    async HTMLConverter(filePath, destinationPath) {
        const processedHtml = await this.ProcessingToHTML(filePath)
        const writer = new Writer()
        writer.Write(destinationPath, processedHtml)
    }

    async PDFConverter(filePath, destinationPath) {
        const processedHtml = await this.ProcessingToHTML(filePath)
        PdfWriter.WritePDF(destinationPath, processedHtml)
    }

    async HTMLAndPDFConverter(filePath, destinationPath) {
        await this.HTMLConverter(filePath, destinationPath)
        await this.PDFConverter(filePath, destinationPath)
    }
}

module.exports = Converter