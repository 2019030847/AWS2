const express = require("express");
const router = express.Router();

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