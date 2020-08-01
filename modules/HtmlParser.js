const ejs = require("ejs")
const { resolve } = require("path")

class HtmlParser {

    static async Parse(table) {
        return await ejs.renderFile(resolve(__dirname, "../view/table.ejs"), { tableHeader: table.header, tableBody: table.body })
    }

}

module.exports = HtmlParser