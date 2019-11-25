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
			console.log('Entrou get commando')
			var date = new Date();
			let values = '"' + date.getTime() +'","' + results[0].valor + '"';
			connection.query('INSERT INTO fabricainteligente.projeto_final_grafico(Data, Valor) VALUES (' + values + ')', function(error, results){
				if (error){
					res.sendStatus(500);
					console.log(error)
				} else {
					console.log(results);
					res.send(results);
				}
			})
			res.json(results[0].valor);
			console.log(results[0].valor)
		}
	})
}

function sendCommand(req,res){
	connection.query('Select * from fabricainteligente.projeto_final limit 1', function(error, results){
		if(error){
			res.sendStatus(500);
			console.log(error);
		} else {
			if(results[0].valor==0){
				connection.query("Update fabricainteligente.projeto_final set valor = 1");
				connection.query('Select * from fabricainteligente.projeto_final limit 1', function(error, results){
					if(error){
						res.sendStatus(500);
						console.log(error);
					} else {
						res.json(results[0].valor);
						console.log(results[0].valor)
					}
				})
			}
			else{
				connection.query("Update fabricainteligente.projeto_final set valor = 0");
				connection.query('Select * from fabricainteligente.projeto_final limit 1', function(error, results){
					if(error){
						res.sendStatus(500);
						console.log(error);
					} else {
						res.json(results[0].valor);
						console.log(results[0].valor)
					}
				})
			}
		}
	})
}

function showgraph(req,res){
	connection.query('Select * from fabricainteligente.projeto_final_grafico limit 1', function(error, results){
		if(error){
			res.sendStatus(500);
			console.log(error);
		} else {
			res.json(results);
			console.log(results);
		}
	})
}

function acende(req,res){
	connection.query("Update fabricainteligente.projeto_final set valor = 1");
}
function apaga(req,res){
	connection.query("Update fabricainteligente.projeto_final set valor = 0");
}


module.exports = {getData, addData, getCommand, sendCommand, acende, apaga, showgraph}