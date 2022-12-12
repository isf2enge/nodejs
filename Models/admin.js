//frameworkbase

    const sequelize = require('sequelize')
    const Sequelize = new sequelize('irineu','root','89781258b',{

        host: 'localhost',
        dialect: 'mysql',
        query: {raw: true}
    })
//Cadastro da table
    const cadastro = Sequelize.define('Cadastros',{
        Nome:{type: sequelize.STRING},
        Idade: {type: sequelize.INTEGER}
    })

//Exportação
    module.exports = cadastro

