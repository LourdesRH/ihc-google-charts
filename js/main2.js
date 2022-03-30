google.charts.load("current", {packages:["corechart"]});
      google.charts.setOnLoadCallback(drawChart);
      function drawChart() {
        var data = google.visualization.arrayToDataTable([
          ['ID', 'X', 'Y', 'Temperature'],
          ['Cham',   75,  50,      2],
          ['Ceb',   79,  136,      5],
          ['Ace',   82,  184,      5],
          ['Que',   72,  278,      3],
          ['Jam',   81,  260,      2],
          ['piñ',   72,  170,      2]
        ]);


        var options = {
            'width':450, //tamaño de la grafica
            'height':300,
            title: "¿Cuánta pizza comiste anoche?",
          colorAxis: {colors: ['yellow', 'red']}
          
        };

        var chart = new google.visualization.BubbleChart(document.getElementById('grafica3'));
        chart.draw(data, options);
      }