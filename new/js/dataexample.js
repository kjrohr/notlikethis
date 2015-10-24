// load the google vis library and core chart package
google.load("visualization", "1", {packages:["corechart"]});

// once loaded run function
google.setOnLoadCallback(drawChart);

// drawChart function
function drawChart(){
	// create a data table using an array
	var data = google.visualization.arrayToDataTable([
		["race", "population"],
		["race 1", 5],
		["race 2", 3],
		["race 3", 3],
		["race 4", 4]
		
		
		]);
		
		// options for chart
		var options = {
			title: "Player Race Comparison", 
			pieHole: 0.4,
			pieSliceText: "label",
			pieStartAngle: 100,
			legend: {position: "labeled"},
			toolTip: {trigger: "none"},
			colors: ["#000", "#292e37", "#8a0707", "#a3c00f", "#e8ece5"],
			backgroundColor: {fill: "transparent"}
			};
			
		var chart = new google.visualization.PieChart(document.getElementById("piechart"));
		
		// draw the chart
		chart.draw(data, options);
}








