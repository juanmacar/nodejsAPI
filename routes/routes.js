const express = require('express'),
    router = express.Router();


router.get('/', function(req, res) {
    res.send("Hola desde el Router")
  })

module.exports = router;