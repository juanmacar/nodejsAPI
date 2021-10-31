const express = require('express'),
router = express.Router();
const assignId = require('../modules/assignId.js');
//const {v4 : uuidv4} = require('uuid')
    
    let productos = [
        {
            title: "Macbook Air",
            price: 899,
            thumbnail: "macbook_air.png",
            id: 1
        },
        {
            title: "Macbook Pro",
            price: 1999,
            thumbnail: "macbook_pro.png",
            id: 2
        },
        {
            title: "Mac Mini",
            price: 699,
            thumbnail: "mac_mini.png",
            id: 3
        }
    ]

  router.get('/productos', function(req, res) {
    res.send(productos);
  })

  router.get('/productos/:id', function(req, res) {
    let id = req.params.id;
    res.send(productos[id-1])
  })

  router.post('/productos', function(req, res) {
      let nuevoProducto = {title: req.body.title, price: req.body.price, thumbnail: req.body.thumbnail, id: assignId(productos)};
      productos.push(nuevoProducto)
    res.send(productos)
  })

  router.put('/productos/:id', function(req, res) {
    let id = req.params.id;
    productos[id-1].title = req.body.title;
    productos[id-1].price = req.body.price;
    res.send(productos)
  })

  router.delete('/productos/:id', function(req, res) {
    let id = req.params.id;
    productos = productos.filter(item => item.id != id)
    res.send(productos)
  })
module.exports = router;