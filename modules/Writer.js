const { writeFileSync } = require("fs")

class Writer {

    Write(destinationPath, content) {

        const fullDestinationPath = destinationPath.includes(".html") ? destinationPath : `${destinationPath}.html` 

        try {
            writeFileSync(fullDestinationPath, content)
            console.log("HTML created with success")
        } catch(writeError) {
            console.log(`Error: ${writeError}`)
        }

    }

}

module.exports = Writer