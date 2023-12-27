const express = require('express');
//const mysql = require('mysql');

const app = express();
const port = 8080;
const config = {
    host: 'db',
    user: 'root',
    password: 'root',
    database:'nodedb'
};

//const connection = mysql.createConnection(config);

// const sql = `INSERT INTO PersonDB(Name) values('Isaque')`;
// connection.query(sql);
// connection.end();


app.get('/', (req,res) => {
    res.send('<h1>Full Cycle</h1>')
});

app.listen(port, ()=> {
    console.log('Rodando em: https://localhost:' + port)
});