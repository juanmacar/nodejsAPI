let express = require('express');
const app = express();
let cors = require('cors');
const PORT = 3000
require("dotenv").config()
app.listen(process.env.PORT, function () {
    console.log(`listening on port http://localhost:${process.env.PORT}`);
})

app.get('/', function (req, res) {
    res.send("hola");

})