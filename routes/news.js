const express = require('express');
const router = express.Router();
const dbConnection = require('../config/dbConnection')
const connection = dbConnection()

router.get('/', (req, res, next) => {     
    let page = req.query.page
    let pagina = Number(req.params.id)
    let cantNews = 5
    let inicio = (cantNews * page) - cantNews 
    let siguiente = Number(page)+1
    let atras = Number(page)-1
    
    if (atras <= 0){
        atras = 1
    }
    
    connection.query(`SELECT * FROM news LIMIT ${inicio}, ${cantNews}`, (error, result) => {
        // console.log(error)
        console.log(result)
        res.render('news/news.ejs', {
            news: result,
            page,
            siguiente, 
            atras,   
       
        })
    })
});

router.post('/', (req, res, next) => {
    console.log(req.body)
    const {title, news} = req.body

    

    connection.query("INSERT INTO news SET ?",{
        title,
        news
    }, (error, result) => {
        res.redirect('/news?page=1')
    })
})
module.exports = router;