$("#acender").click(function() {
	$.ajax({
		method: "GET",
		url: "/exemplo/api/teste_projeto_final_acende",
		//url: "http://127.0.0.1:5000/api/maquina",
		dataType: 'json',
	})
	console.log("Entrou acender");
  });

$("#apagar").click(function() {
	$.ajax({
		method: "GET",
		url: "/exemplo/api/teste_projeto_final_apaga",
		//url: "http://127.0.0.1:5000/api/maquina",
		dataType: 'json',
	})
	console.log("Entrou apagar");
  });