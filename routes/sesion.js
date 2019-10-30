var express = require('express');
var app = express();

var Sesion = require('../models/sesion');

app.post('/', (req, res)=>{
    var body = req.body;
    if (body.login) {
        var sesion = new Sesion({
            idUsuario: body.idUsuario,
            login: body.login
        })
    }
    if (body.logout) {
        var sesion = new Sesion({
            idUsuario: body.idUsuario,
            logout: body.logout
        })
    }

    sesion.save((error, data)=>{
        if(error) {
            return res.status(400).json({
               error: error 
            })
        }

        res.status(200).json({
          mensaje: 'Sesión creada'  
        })
    })

})

module.exports = app;