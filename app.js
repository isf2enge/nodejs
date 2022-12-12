//Frameworks base

    const express = require('express')
    const app = express()
    const admin = require('./routes/admin')
    const handlebars = require('express-handlebars')
    const bodyparser = require('body-parser')

//config
    //Template engine
        app.engine('handlebars',handlebars.engine({defaultLayout: 'main'}))
        app.set('view engine','handlebars')
    //bodyparser
        app.use(bodyparser.urlencoded({extended: true}))
        app.use(bodyparser.json())
    



//Types routes
    app.use('/admin',admin)


//Conexion server

    app.listen(8081,()=>{
        console.log('Servidor rodando!')
    })

