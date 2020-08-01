# csv-converter-to-html-and-pdf

#### Program to convert excel (CSV) to HTML and PDF using OO in JavaScript with Node.js

---

#### Instalação:

```
    npm install --save csv-converter-to-pdf-and-html
```

#### Como usar:

```js
    const Converter = require("csv-converter-to-pdf-and-html")
    const path = require("path")

    const converter = new Converter()

    const filePath = path.resolve("./users.csv") // Caminho completo
    const destinationPath = path.resolve("./HTMLandPDF") // Aqui não precisa especificar a extensão (HTML or PDF)

    converter.HTMLAndPDFConverter(filePath, destinationPath)
```

 #### Outras funções:

 ```js
    converter.HTMLConverter(filePath, destinationPath)
    converter.PDFConverter(filePath, destinationPath)
 ```

---

