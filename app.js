const express = require('express');
const app = express();
const db = require('./db.json');
let port = process.env.PORT || 3001

const cors = require('cors')

app.use(cors({origin: "*"}))


app.get('/',(req,res)=>{
    res.send(
        {
            product:'/products'
        }
    )}

)

app.get('/products', (req, res) => {res.send(db)})

app.listen( port ,() => console.log(`Server start http://localhost:${port}`))


