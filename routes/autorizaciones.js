var express = require('express');
var app = express();

app.get('/', (req, res)=>{
    const autorizaciones = {
        permisosAdmin: ['ventas','logistica','finanzas','rrhh','usuarios'],
        permisosEmpl: ['ventas','logistica'],
        permisosCfo: ['finanzas','rrhh'],
        permisosCeo: ['ventas','logistica','finanzas','rrhh']
    }

    setImmediate(()=>{
        try {
            res.status(200).json({
              autorizaciones: autorizaciones
            })
        } catch(error) {
            res.status(400).send(error);
        }
    })
})

module.exports = app;