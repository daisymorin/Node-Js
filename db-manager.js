const mysql = require('mysql');

//déclaration de notre classe
class DBManager{

    db;

    constructor(){
        this.db = mysql.createConnection({

            host: "localhost",

            user: "root",

            password: "",

            database : "classicmodels"

          });

        this.db.connect(function(err) {

            if (err) {throw err;}

            console.log("Connecté à la base de données MySQL!");

         });
    }

    getdb() {
        return this.db;
    }
}

//export de la Classe dans notre module
module.exports = DBManager;
