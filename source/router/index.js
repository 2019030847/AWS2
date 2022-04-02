const express = require("express");
const dbContactos = require('../models/contactos.js');
const router = express.Router();
const mysql = require("mysql");

//dbContactos.Contactos.insertar({nombre:'Johana',domicilio:'El Zapote', telefono:'6692202109'})
//dbContactos.Contactos.mostrarTodos();
//dbContactos.Contactos.buscarId(1);
dbContactos.Contactos.borrar(1);

router.get('/',(req,res)=>{
    res.send("Iniciamos Servidor");
    router.get('/index',(req,res)=>{
        res.render('index.html',{titulo:'Index'})
    });
    router.get('/acercade',(req,res)=>{
        res.render('acercade.html',{titulo:'Acerca de'})
    });
    router.get('/contactos',(req,res)=>{
        res.render('contactos.html',{titulo:'Contactos'})
    });
    router.get('/menu',(req,res)=>{
        res.render('Menu.html',{titulo:'Menu'})
    });
    router.get('*',(req,res)=>{
    res.send("No existe la pagina");
})
})
module.exports=router;