const express = require('express')
var hbs = require('hbs');
require('dotenv').config();

const port=process.env.PORT;
const app = express()


// HANDLEBEARS
app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials');

// Servir conetenido estatico

app.use( express.static('public') )


app.get('/',  (req, res) => {
    res.render('home',{
        nombre: 'Daniel Gaspar',
        titulo: 'Curso de Node '
    });
})
app.get('/generic',  (req, res) => {
    res.render('generic',{
        nombre: 'Daniel Gaspar',
        titulo: 'Curso de Node '
    });
})
app.get('/elements',  (req, res) => {
    res.render('elements',{
        nombre: 'Daniel Gaspar',
        titulo: 'Curso de Node '
    });
})



app.get('*',  (req, res) => {
    res.sendFile(__dirname+'/public/404.html')
  })
  
  app.listen(port, () => {
      console.log(`Exampl app listenin on port ${port}`)
    })