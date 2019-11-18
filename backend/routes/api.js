const machine  = require('../controllers/machine');
const data = require('../controllers/data.js');

exports.build = function(server){

  var api = '/api';

  server
  	.get(api  + '/maquina', 	machine.getall)
    .post(api + '/maquina', 	machine.add)
    .get(api +  '/get_data', data.getData)
    .post(api + '/post_data', data.addData)
    .post(api + '/teste_projeto_final', data.getCommand)
    .post(api + '/teste_projeto_final_muda_estado', data.sendCommand)
}
