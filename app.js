// const express = require('express');
// const app = express();
// const db = require('./db.json');
// let port = process.env.PORT || 3001

// const cors = require('cors')

// app.use(cors({'Access-Control-Allow-Origin': "*"}))

// app.get('/',(req,res)=>{
//     res.send(
//         {
//             product:'/products'
//         }
//     )}

// )
// app.get('/products', (req, res) => {res.send(db)})
// app.listen( port ,() => console.log(`Server start http://localhost:${port}`))


const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();
const port = process.env.PORT || 3000;

server.use(middlewares);
server.use(router);

server.listen(port);

