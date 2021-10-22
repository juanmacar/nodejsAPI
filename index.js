let express = require('express');
const app = express();
let cors = require('cors');
const router = require('./routes/routes');
require("dotenv").config()
app.use(express.json());



app.listen(process.env.PORT, function () {
    console.log(`listening on port http://localhost:${process.env.PORT}`);
})

app.get('/', function (req, res) {
    res.send("hola, tenés que entrar a /api y mandar tus peticiones");

})


app.use('/api', router);


