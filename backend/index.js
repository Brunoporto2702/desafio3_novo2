const express       = require('express');
const routes 		= require('./routes/api.js');
const bodyParser    = require('body-parser');

var api = express();

api.set('port', process.env.PORT || 5000);

api.use(bodyParser.json());
api.use(bodyParser.text());

api.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

routes.build(api);

api.listen(api.get('port'), () => {
    //console.log('Listening to http://127.0.0.1:5000')
});
module.exports = api;

