const mysql = require('mysql');

var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'Futib@1234'
});

function getData(req,res){
	connection.query('SELECT * FROM fabricainteligente.dados', function(error, results){
		if(error){
			res.sendStatus(500);
			console.log(error);
		} else {
			res.json(results);
			console.log(results)
		}
	})
}

function addData(req,res){
    let values = '"' + req.body.data +'","' + req.body.maquina +'","' + req.body.valor + '"';
    console.log(req.body);
    console.log(values);

	connection.query('INSERT INTO fabricainteligente.dados(Data, Maquina, Valor) VALUES (' + values + ')', function(error, results){
	 	if (error){
			 res.sendStatus(500);
			 console.log(error)
	 	} else {
			res.send(req.body);
		}
	 })
}

module.exports = {getData, addData}