import Reader from "./modules/Reader.js"
import Processor from  "./modules/Processor.js"
import Table from "./modules/Table.js"
import HtmlParser from "./modules/HtmlParser.js"
import Writer from "./modules/Writer.js"
import PdfWriter from "./modules/PdfWriter.js"

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

export default Converter