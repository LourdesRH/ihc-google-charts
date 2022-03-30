google.charts.load("current", {packages:['corechart']});
google.charts.setOnLoadCallback(drawChart);
function drawChart() {
  var data = google.visualization.arrayToDataTable([
    ["Element", "Porción", { role: "style" } ],
    ["Champ", 15, "#b87333"],
    ["Cebo", 10.50, "silver"],
    ["Acei", 5.30, "gold"],
    ["Queso", 30.45, "blue"],
    ["Jam", 21.45, "black"],
    ["Piña", 50.45, "pink"]
  ]);

  var view = new google.visualization.DataView(data);
  view.setColumns([0, 1,
                   { calc: "stringify",
                     sourceColumn: 1,
                     type: "string",
                     role: "annotation" },
                   2]);

  var options = {
    'width':450, //tamaño de la grafica
    'height':300,
    title: "¿Cuánta pizza comiste anoche?",
    bar: {groupWidth: "95%"},
    legend: { position: "none" },
  };
  var chart = new google.visualization.ColumnChart(document.getElementById("grafica5"));
  chart.draw(view, options);
}