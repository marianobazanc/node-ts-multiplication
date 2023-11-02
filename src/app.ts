import {yarg} from "./plugins/yargs.plugin"
import { ServerApp } from "./presentation/server-app"

(async() => {
    await main()
})()

async function main() {
    const {b: base, l: limit, s: showTable, n: nameTable, d: destinationTable} = yarg
    ServerApp.run({base, limit, showTable, nameTable, destinationTable})
}