const http = require('node:http')
const fs = require('node:fs')
const { Console } = require('node:console')

const PORT = 3333

const server = http.createServer((server, response)=>{
    fs.readFile('mensage.html', (err, data)=>{})
    if(err){
        response.writeHead(500, {'Content-Type': 'text/html'});
        response.end(JSON.stringify({message: "Erro ao ler o arquivo"}))
        console.log('Error: ', err)
        return
    }
    response.whiteHead(200, {"Content-Type": "text/html" });
    response.white(data);
    response.end()

})

server.listen(PORT, ()=>{
    console.log(`Servidor on PORT ${PORT}`)
})