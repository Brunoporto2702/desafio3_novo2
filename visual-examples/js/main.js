$(document).ready(function () {
	buildChart1();
	buildChart2(); 
	buildChart3();
	buildChart4();
	buildChart5();
	buildChart6(); 
});

function buildChart1(){
	var myChart = Highcharts.chart('chart-1', {
        chart: {
            type: 'bar'
        },
        title: {
            text: 'Fruit Consumption'
        },
        xAxis: {
            categories: ['Apples', 'Bananas', 'Oranges']
        },
        yAxis: {
            title: {
                text: 'Fruit eaten'
            }
        },
        series: [{
            name: 'Jane',
            data: [1, 0, 4]
        }, {
            name: 'John',
            data: [5, 7, 3]
        }]
    });
}


function buildChart2(){
	var request = $.ajax({
			method: 'GET', 
			url: 'https://cdn.jsdelivr.net/gh/highcharts/highcharts@v7.0.0/samples/data/usdeur.json'
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
                text: 'USD to EUR exchange rate over time'
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
                    text: 'Exchange rate'
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
                name: 'USD to EUR',
                data: data
            }]
		}
		);
	})
}

function buildChart3(){
	Highcharts.chart('chart-3', {
	    chart: {
	        type: 'bar'
	    },
	    title: {
	        text: 'Stacked bar chart'
	    },
	    xAxis: {
	        categories: ['Apples', 'Oranges', 'Pears', 'Grapes', 'Bananas']
	    },
	    yAxis: {
	        min: 0,
	        title: {
	            text: 'Total fruit consumption'
	        }
	    },
	    legend: {
	        reversed: true
	    },
	    plotOptions: {
	        series: {
	            stacking: 'normal'
	        }
	    },
	    series: [{
	        name: 'John',
	        data: [5, 3, 4, 7, 2]
	    }, {
	        name: 'Jane',
	        data: [2, 2, 3, 2, 1]
	    }, {
	        name: 'Joe',
	        data: [3, 4, 4, 2, 5]
	    }]
	});
}

function buildChart4(){
	var context = $('#chart-4');
	
	var chartOptions = {
	        scales: {
	            yAxes: [{
	                ticks: {
	                    beginAtZero: true
	                }
	            }]
	        }
	    }


	var chart = new Chart( context, {
		type: 'bar',
	    data: {
	        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
	        datasets: [{
	            label: '# of Votes',
	            data: [12, 19, 3, 5, 2, 3],
	            backgroundColor: [
	                'rgba(255, 99, 132, 0.2)',
	                'rgba(54, 162, 235, 0.2)',
	                'rgba(255, 206, 86, 0.2)',
	                'rgba(75, 192, 192, 0.2)',
	                'rgba(153, 102, 255, 0.2)',
	                'rgba(255, 159, 64, 0.2)'
	            ],
	            borderColor: [
	                'rgba(255, 99, 132, 1)',
	                'rgba(54, 162, 235, 1)',
	                'rgba(255, 206, 86, 1)',
	                'rgba(75, 192, 192, 1)',
	                'rgba(153, 102, 255, 1)',
	                'rgba(255, 159, 64, 1)'
	            ],
	            borderWidth: 1
	        }]
	    },
	    options: chartOptions
	});
}

function buildChart5(){

	var context = $("#chart-5");

	var chartOptions = {}

	var mixedChart = new Chart(context, {
	    type: 'bar',
	    data: {
	        datasets: [{
	            label: 'Bar',
	            data: [10, 20, 30, 40],
	            backgroundColor: 'rgba(255, 99, 132, 0.2)',
	            borderColor:  'rgba(255, 99, 132, 1)',
	            borderWidth: 1
	        }, {
	            label: 'Line',
	            data: [20, 15, 25, 10],
	            backgroundColor: 'rgba(255,255,255, 0)',
	            borderColor:  'rgba(54, 162, 235, 1)',
	            borderWidth: 1,

	            // Changes this dataset to become a line
	            type: 'line'
	        }],
	        labels: ['January', 'February', 'March', 'April']
	    },
	    options: chartOptions
	});
	
}

function buildChart6(){
	new Chart($('#chart-6'),{
		type:"radar",
		 data:{
			labels:["Eating","Drinking","Sleeping","Designing","Coding","Cycling","Running"],
			datasets:[{
				label:"My First Dataset",
				data:[65,59,90,81,56,55,40],
				fill:true,
				backgroundColor:"rgba(255, 99, 132, 0.2)",
				borderColor:"rgb(255, 99, 132)",
				pointBackgroundColor:"rgb(255, 99, 132)",
				pointBorderColor:"#fff",
				pointHoverBackgroundColor:"#fff",
				pointHoverBorderColor:"rgb(255, 99, 132)"
			}, {
				label:"My Second Dataset",
				data:[28,48,40,19,96,27,100],
				fill:true,
				backgroundColor:"rgba(54, 162, 235, 0.2)",
				borderColor:"rgb(54, 162, 235)",
				pointBackgroundColor:"rgb(54, 162, 235)",
				pointBorderColor:"#fff",
				pointHoverBackgroundColor:"#fff",
				pointHoverBorderColor:"rgb(54, 162, 235)"
			}]
		},
		options:{
			elements: {
				line:{ 
					tension:0,
					borderWidth:3
				}
			}
		}
	});
}