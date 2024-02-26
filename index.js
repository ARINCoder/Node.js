//This load the http module, this is a commonjs Model.
//Compare this to import in React
const http = require('http')
const fs = require('fs')


//Reading the JSON file
const data = fs.readFileSync('eventData.json', 'utf8')
const jsonData = JSON.parse(data)


//Creating a function to handle incoming requests
const handleRequest = (req, res) => {
    if (req.url === '/data' && req.method === 'GET') {
        res.writeHead(200, { 'Content-Type': 'application/json' })
        res.end(JSON.stringify(jsonData))
    } else {
        res.writeHead(404)
        res.write('404 Not Found!')
    }
    res.end()
};
// Defining the Port
const PORT = 3000
//Creating a server
const server = http.createServer(handleRequest)
server.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`)
});