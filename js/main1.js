google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(drawSeriesChart);

function drawSeriesChart() {

var data = google.visualization.arrayToDataTable([
  ['ID', 'Life Expectancy', 'Fertility Rate', 'Region'],
  ['Cham',    80.66,              .67,      'Champi'],
  ['Ceb',    79.84,              1.36,      'Cebollas'],
  ['Ace',    70.73,              2.78,      'Aceitunas'],
  ['Que',    85,              1.50,      'Queso'],
  ['Jam',    75.73,              .78,      'Jamón'],
  ['Piñ',    72,              2.20,      'Piña']
]);

var options = {
  title: 'Fertility rate vs life expectancy in selected countries (2010).' +
    ' X=Life Expectancy, Y=Fertility, Bubble size=Population, Bubble color=Region',
  hAxis: {title: 'Life Expectancy'},
  vAxis: {title: 'Fertility Rate'},
  bubble: {textStyle: {fontSize: 11}}
};

// Set chart options
var options = {
    'width':450, //tamaño de la grafica
    'height':300,
    title: "¿Cuánta pizza comiste anoche?",
};

var chart = new google.visualization.BubbleChart(document.getElementById('grafica2'));
chart.draw(data, options);
}
