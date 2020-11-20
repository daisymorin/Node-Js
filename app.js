const express = require('express');
const exphbs = require('express-handlebars');
const mysql = require('mysql');

const app = express();

const db = mysql.createConnection({
    host : "localhost",
    user : "root",
    password : "",
    database : "classicmodels"
});

db.connect(function (err) {
    if (err) throw err;

    console.log("connecté à la base de données");
});

app.set('view engine', 'hbs');

app.engine('hbs', exphbs({
    extname: ".hbs"
}));

app.use(express.static('public'));

app.get('/', (request, reponse) => {
   let query = "SELECT * FROM products";

   const search = request.query.search;

   console.log('search - ' + search);

   if(search) {
    query += " where productName like '%" + search + "%'";
}
  
   db.query(query, function(err, result) {
       if(err) {throw errr };

       reponse.render('home', {
           products: result,
           searchKey: search
       });
   });
});

app.listen(8080, () => {
    console.log('mon serveur ecoute sur le port 8080');
});