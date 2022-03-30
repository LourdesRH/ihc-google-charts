google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(drawChart);
function drawChart() {
  var data = google.visualization.arrayToDataTable([
    ['Cham', 20, 20, 30, 30],
    ['Ceb', 5, 5, 15, 15],
    ['Ace', 5, 5, 15, 15],
    ['Que', 30, 30, 66, 66],
    ['Jam', 20, 20, 45, 45],
    ['piñ', 86, 86, 92, 92]
    // Treat the first row as data.
  ], true);

  var options = {
    'width':450, //tamaño de la grafica
    'height':300,
    title: "¿Cuánta pizza comiste anoche?",
    legend: 'none',
    bar: { groupWidth: '100%' }, // Remove space between bars.
    candlestick: {
      fallingColor: { strokeWidth: 0, fill: '#a52714' }, // red
      risingColor: { strokeWidth: 0, fill: '#0f9d58' }   // green
    }
  };

  var chart = new google.visualization.CandlestickChart(document.getElementById('grafica4'));
  chart.draw(data, options);
}