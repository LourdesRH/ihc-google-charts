      // Load the Visualization API and the corechart package.
      google.charts.load('current', {'packages':['corechart']}); //tipo de grafica siempre tiene que ir

      // Set a callback to run when the Google Visualization API is loaded.
      google.charts.setOnLoadCallback(dibujarGrafica); 

      // Callback that creates and populates a data table,
      // instantiates the pie chart, passes in the data and
      // draws it.
      function dibujarGrafica() {

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

        // Set chart options
        var options = {
            'title':'¿Cuánta pizza comiste anoche?', //titulo
            'width':450, //tamaño de la grafica
            'height':300
        };

        // Instantiate and draw our chart, passing in some options.
        var chart = new google.visualization.PieChart(document.getElementById('grafica'));
        chart.draw(data, options);
      }