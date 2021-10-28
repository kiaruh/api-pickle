const app = require('express')();
const db = require('./db.json');
let port = process.env.PORT || 3001

app.get('/',(req,res)=>{
    res.status(200).send(
        {
            product:'/products'
        }
    )}

)

app.get('/products', (req, res) => {res.status(200).send(db)})

app.listen( port ,() => console.log(`Server start http://localhost:${port}`))
