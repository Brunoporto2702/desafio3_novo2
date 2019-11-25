$(document).ready(function () {
	buildChart2(); 
});


function buildChart2(){
	var request = $.ajax({
			method: 'GET', 
			url: "/exemplo/api/showgraph"
	})


	request.done(function(data){
		console.log(data);

		var date = new Date();
		console.log(date,date.getTime())
		Highcharts.chart('chart-2',
		 {
            chart: {
                zoomType: 'x'
            },
            title: {
                text: 'Estado do LED ao longo do tempo'
            },
            subtitle: {
                text: document.ontouchstart === undefined ?
                    'Click and drag in the plot area to zoom in' : 'Pinch the chart to zoom in'
            },
            xAxis: {
                type: 'datetime'
            },
            yAxis: {
                title: {
                    text: 'Estado do LED'
                }
            },
            legend: {
                enabled: false
            },
            plotOptions: {
                area: {
                    fillColor: {
                        linearGradient: {
                            x1: 0,
                            y1: 0,
                            x2: 0,
                            y2: 1
                        },
                        stops: [
                            [0, Highcharts.getOptions().colors[0]],
                            [1, Highcharts.Color(Highcharts.getOptions().colors[0]).setOpacity(0).get('rgba')]
                        ]
                    },
                    marker: {
                        radius: 2
                    },
                    lineWidth: 1,
                    states: {
                        hover: {
                            lineWidth: 1
                        }
                    },
                    threshold: null
                }
            },

            series: [{
                type: 'area',
                name: 'Estado LED',
                data: data
            }]
		}
		);
	})
}
