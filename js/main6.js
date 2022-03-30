google.charts.load("current", {packages:["corechart"]});
google.charts.setOnLoadCallback(drawChart);
function drawChart() {
          // Create the data table.
          var data = new google.visualization.DataTable(); //variables para llenar los datos
          //y que se pueda graficar
          data.addColumn('string', 'Topping'); //columnas en las graficas
          data.addColumn('number', 'Slices');
          data.addRows([
            ['Champiñones', 2], //3 es un porciento de la grafica
            ['Cebollas', .5],    //el nombre de la derecha de la grafica
            ['Aceitunas', .5],
            ['Queso', 3],
            ['Jamón', 2],
            ['Piña', 2],
          ]);

  var options = {
    'width':450, //tamaño de la grafica
    'height':300,
    title: '¿Cuánta pizza comiste anoche?',
    is3D: true,
  };

  var chart = new google.visualization.PieChart(document.getElementById('grafica6'));
  chart.draw(data, options);
}