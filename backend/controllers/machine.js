const mysql = require('mysql');

var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'Futib@1234'
});

function getall(req,res){
	connection.query('SELECT * FROM fabricainteligente.maquinas', function(error, results){
		if(error){
			res.sendStatus(500);
			console.log(error);
		} else {
			res.send(results);
		}
	})
}

function add(req,res){
	let values = '"' + req.body.fabricante +'","' + req.body.modelo +'","' + req.body.ip + '"';

	connection.query('INSERT INTO fabricainteligente.maquinas(Fabricante, Modelo, ip) VALUES (' + values + ')', function(error, results){
	 	if (error){
			 res.sendStatus(500);
			 console.log(error)
	 	} else {
			res.send(req.body);
		}
	 })
}

module.exports = {getall, add}