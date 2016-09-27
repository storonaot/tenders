
function drawPieChartTwo() {
// Define the chart to be drawn.
  var data = new google.visualization.DataTable()
  //TODO: добавить нужные цвета
  var colorsPieTwo = ['#77c9d7', '#addbe0', '#43777c']
  var options = {
    colors: colorsPieTwo,
    chartArea: {
      left: 40,
      top: 10,
      width:'90%',
      height:'90%',
    },
  };
  data.addColumn('string', 'Категория')
  data.addColumn('number', 'Доля')
  data.addRows([
    ['Борхиммаш ОАО', 15],
    ['Новокуйбышевский НПЗ ОАО', 43],
    ['Сибнефтегаз ОАО', 76],
  ]);
  // Instantiate and draw the chart.

  var dataForTable = new google.visualization.DataTable();
  dataForTable.addColumn('string', 'Наименование организации');
  dataForTable.addColumn('string', 'Регион');
  dataForTable.addColumn('number', 'Всего тендеров');
  dataForTable.addColumn('number', 'Частота (тенд./мес.)');

  dataForTable.addRows([
    ['Борхиммаш ОАО', 'Воронежская обл.', 15, 0.9,],
    ['Новокуйбышевский НПЗ ОАО', 'Самарская обл.', 43, 3.6,],
    ['Сибнефтегаз ОАО', 'Ямало-Ненецкий АО', 76, 6.3,],
  ]);

  var cssClassNames = {
    tableRow: 'x-table__row',
    hoverTableRow: 'x-table__row--hover',
    tableCell: 'x-table__cell',
    headerCell: 'x-table__head-cell',
    headerRow: 'x-table__head',
    oddTableRow: 'x-table__row',
  };

  var optionsTable = {
    showRowNumber: false,
    height: '300px',
    cssClassNames,
  };

  var table = new google.visualization.Table(document.getElementById('table-for-piechart'));
  table.draw(dataForTable, optionsTable);

  var chart = new google.visualization.PieChart(document.getElementById('piechartTwo'));
  chart.draw(data, options);

  google.visualization.events.addListener(table, 'select', function() {
    chart.setSelection(table.getSelection());
  });

  google.visualization.events.addListener(chart, 'select', function() {
    table.setSelection(chart.getSelection());
  });

}
