function updateList(dados){
	$("#listTable tbody").empty()
	var table_html = ''

	dados.forEach(function(item, index){
		table_html += "<tr>"
		table_html += "<th>" + index + "</th>"
		table_html += "<th>" + item.Data + "</th>"
		table_html += "<th>" + item.Maquina + "</th>"
		table_html += "<th>" + item.Valor + "</th>"
		table_html += "</tr>"
	})
	$("#listTable tbody").html(table_html);
}


$(document).ready(function(){
	$.ajax({
		method: "GET",
		//url: "/exemplo/api/maquina",
		url: "http://127.0.0.1:5000/api/get_data",
		dataType: 'json',
	}).done(function(resp){
		updateList(resp);
	})
	.fail(function(error) {
		alert( "error" );
  	})
})