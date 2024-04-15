const express = require('express');
const con = require('./dbconfig')
//const Connection = require('pg');

const app = express();
app.use(express.json())

app.get('/', (req,res) => {
    let query = 'SELECT * FROM employe';
    con.query(query, function(err, result){
        if(err){
            console.log(err)
        }else{
            console.log(result)
            res.send(result)
        }
    })
})

app.delete('/remove/:id', (req, res)=>{
    let data = req.params.id;
    let sql = `DELETE FROM employe WHERE id = $1`;
    con.query(sql, [data], function(err, result){
        if(err){
            console.log(err)
        }else{
            console.log(result);
            res.send(result)
        }

    })
})
app.post("/post",(req,res)=>{
    const {id,name,dept,salary}=req.body
    const sql = "INSERT INTO employe(id, name, dept, salary) VALUES($1, $2, $3, $4)";
    con.query(sql,[id,name,dept,salary],(err,result)=>{
        if(err){
         
            res.json(err)
            console.log("data is a not posted")
        }
        else{
        
            res.json(result)
            console.log("data is posted")
        }
    })
}
)



// app.get('/', (req, res) => {
//     let query = 'SELECT * FROM employe';
//      con.query(query, function(err, result){
//         if(err){
//              console.log(err)
//                }else{
//                  res.send(result)
//                 }
// })
// })


app.put("/put/:id", (req, res) => {
    const id = req.params.id;
    const {name,dept,salary}=req.body
    const sql = "update employe set name=$1,dept=$2,salary=$3 WHERE id = $4";
    con.query(sql, [name,dept,salary,id], (err, result) => {
        if (err) {
            console.log("data is a not delete");
            res.json(err)
           
        } else {
            console.log("Data deleted successfully");
            res.json(result);
        }
    });
});


app.patch("/patch/:id", (req, res) => {
    const id = req.params.id;
    const {name,dept,salary} = req.body;
    const sql = "update employe set name=$1,dept=$2,salary=$3 WHERE id = $4";
    con.query(sql,[id,name, dept, salary], (err, result) => {
        if (err) {
            console.log("data is not update");
            res.json(err)
           
        } else {
            console.log("Data updated successfully");
            res.json(result);
        }
    });
});


app.listen(4500, ()=>{
console.log('server connect ',4500)
})