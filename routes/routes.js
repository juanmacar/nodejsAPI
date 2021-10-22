const express = require('express'),
    router = express.Router();
    
    let productos = [
        {
            nombre: "Macbook Air",
            precio: 899,
            foto: "",
            id: 1
        },
        {
            nombre: "Macbook Pro",
            precio: 1999,
            foto: "",
            id: 2
        },
        {
            nombre: "Mac Mini",
            precio: 699,
            foto: "",
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
      let nuevoProducto = req.body;
      nuevoProducto = {...nuevoProducto, id: (productos.length +1)}
      console.log(productos.length)
      productos.push(nuevoProducto)
    res.send(productos)
  })

  router.put('/productos/:id', function(req, res) {
    let id = req.params.id;
    productos[id-1].nombre = req.body.nombre;
    productos[id-1].precio = req.body.precio;
    res.send(productos)
  })

  router.delete('/productos/:id', function(req, res) {
    let id = req.params.id;
    productos = productos.filter(item => item.id != id)
    res.send(productos)
  })
module.exports = router;