const express = require('express');
const exphbs = require('express-handlebars');
const mysql = require('mysql');
const DBManager = require('./db-manager');

const dbmanager = new DBManager();

const app = express();


app.set('view engine', 'hbs');

app.engine('hbs', exphbs({
    extname: ".hbs"
}));

app.use(express.static('public'));

app.get('/', (request, reponse) => {
   let query = "SELECT * FROM products";

   dbmanager.getdb().query(query, function(err, result) {
       if(err) {throw errr };

       reponse.render('home', {
           products: result,
       });
   });
});

app.get('/products', (request, reponse) =>{
    console.log('toto');

    let query = "SELECT * FROM products";
    const search = request.query.search;

    console.log('search - ' + search);
 
    if(search) {
     query += " where productName like '%" + search + "%'";
    }

    dbmanager.getdb().query(query, function(err, result) {
        if(err) {throw errr };

    reponse.send(result);
    });
});

app.listen(8080, () => {
    console.log('mon serveur ecoute sur le port 8080');
});