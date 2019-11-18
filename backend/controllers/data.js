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
	console.log(req);
	console.log(values)
	connection.query('INSERT INTO fabricainteligente.dados(Data, Maquina, Valor) VALUES (' + values + ')', function(error, results){
	 	if (error){
			res.sendStatus(500);
			console.log(error)
	 	} else {
			console.log(req.body);
			res.send(req.body);
		}
	 })
}

function getCommand(req,res){
	// dado = req.body.dado
	// results = { 
	// 	'dado': dado
	// }
	// res.json(results);
	// console.log(req.body)
	// console.log(results)
	connection.query('Select * from fabricainteligente.projeto_final limit 1', function(error, results){
		if(error){
			res.sendStatus(500);
			console.log(error);
		} else {
			res.json(results);
			console.log(results)
		}
	})
}


module.exports = {getData, addData, getCommand}