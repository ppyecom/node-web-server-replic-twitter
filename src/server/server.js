const express = require('express')
const path = require('path')

const startServer = (options) => {
    const {port, public_path = 'public'} = options
    const app = express()

    //Para pdoer usar middleware usar la palabra use
    app.use(express.static(public_path)) //Contenido estatico que tenemos disponible

    app.get('*', (req, res) => {
        const indexPath = path.join(__dirname + `../../${public_path}/index.html`)
        res.sendFile(indexPath)
    })

    app.listen(port, () => {
        console.log('Escuchando el puerto')
    })
}

module.exports = {
    startServer
}