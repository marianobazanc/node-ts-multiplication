import fs from "fs"
import { yarg } from "./plugins/yargs.plugin"

let message: string = ""
let base: number = yarg.b
const header: string = `
================================
        Tabla del ${yarg.b}
================================
`

const multiplicacion = () => {
    message += header
    for (let i = 1; i <= yarg.l; i++) {
        message += `${base} X ${i} = ${base*i}\n`    
    }
}

multiplicacion()
if(yarg.s){
    console.log(message)
}

const outputPath = "outputs"

fs.mkdirSync(outputPath, {recursive: true})

fs.writeFileSync(`outputs/tabla_${base}.txt`, message)
