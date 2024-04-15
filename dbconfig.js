const pg = require('pg');


const con = new pg.Client({
    user: 'postgres',
    port: 5432,
    host: 'localhost',
    password: 'postgres',
    database: 'tnplab1', 
})

con.connect((err)=>{
    if(err){
        console.log('err')
    }else{
        console.log('connect postgres')
    }
})

module.exports = con