const app = require('express')();
const db = require('./db.json');

app.set('port',process.env.PORT || 3001)

app.listen(app.get('port'),() => console.log('Server start http://localhost:' +app.get('port')))

app.get('/',(req,res)=>{
    res.status(200).send(
        {
            product:'/products'
        }
    )}

)

app.get('/products', (req, res) => {res.status(200).send(db)})