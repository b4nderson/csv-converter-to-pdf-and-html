import Converter from "./Converter.js"
import path from "path"

const converter = new Converter()

const pathName = path.resolve("./files/users.csv")
const destinationPath = path.resolve("./files/aaaaaaaaaaaaaaaaaaaaaaaa")

console.log(pathName)
console.log(destinationPath)
 
converter.HTMLAndPDFConverter(pathName, destinationPath)