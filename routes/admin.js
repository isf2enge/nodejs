//frameworks base

    const express = require('express')
    const routes = express()
    const admin = require('../Models/admin')



//routes
    routes.get('/',(req,res)=>{
        res.render('logger')})

    routes.post('/cadastro',(req,res)=>{

        admin.create({Nome: req.body.Nome,Idade:req.body.Idade}).then(
            res.redirect('/admin/home')
        )
    }
    )
    routes.get('/home',(req,res)=>{
        admin.findAll().then((admins)=>{
            res.render('home',{admins:admins})
        })
    })
    routes.get('/delete/:id',(req,res)=>{
        admin.destroy({where:{'id': req.params.id}}).then(
            res.redirect('/admin/home')
        )
        
    })

//Export
    module.exports = routes