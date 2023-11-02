import { CreateTable } from "../domain/use-cases/create-table.use-case"
import { SaveFile } from "../domain/use-cases/save-file.use-case"

interface RunOptions {
    base: number,
    limit: number,
    showTable: boolean,
    nameTable: string,
    destinationTable: string
}


export class ServerApp {


    static run({base, limit, showTable, nameTable, destinationTable}: RunOptions){
        console.log('Server running...')
        const table = new CreateTable().execute({base, limit})
        const wasCreated = new SaveFile().execute({fileContent: table, destination: destinationTable, fileName: nameTable})
        if(showTable) {console.log(table)}

        (wasCreated) ? console.log("File created") : console.log("Error: File not created")
    }
}