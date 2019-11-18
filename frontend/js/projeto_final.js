$(document).ready(function(){
	$.ajax({
		method: "GET",
		url: "/exemplo/api/maquina",
		//url: "http://127.0.0.1:5000/api/maquina",
		dataType: 'json',
	}).done(function(resp){
		updateList(resp);
	})
	.fail(function(error) {
		alert( "error" );
  	})
})

$("#acender").click(function() {
	$.ajax({
		method: "GET",
		url: "/exemplo/api/acende",
		//url: "http://127.0.0.1:5000/api/maquina",
		dataType: 'json',
	})
	console.log("Entrou acender");
  });

$("#apagar").click(function() {
	$.ajax({
		method: "GET",
		url: "/exemplo/api/apaga",
		//url: "http://127.0.0.1:5000/api/maquina",
		dataType: 'json',
	})
	console.log("Entrou apagar");
  });