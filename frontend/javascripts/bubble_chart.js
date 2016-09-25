function drawBubbleChart() {

  var dataForTable = new google.visualization.DataTable();
  dataForTable.addColumn('number', '№');
  dataForTable.addColumn('string', 'Название процедуры');
  dataForTable.addColumn('string', 'Вес*');
  dataForTable.addColumn('string', 'Тип');
  dataForTable.addColumn('string', 'Организатор');
  dataForTable.addColumn('date', 'Опубликовано');
  dataForTable.addColumn('date', 'Актуально до');
  dataForTable.addColumn('number', 'Цена, руб.');

  dataForTable.addRows([
    [135677, 'Закупка крепежных изделий', '75%', 'Аукцион', 'Новокуйбышевс', new Date(2016, 6, 5), new Date(2016, 7, 8), 3000000],
    [134568, 'Гайка на 2017 г.', '53 %', 'Запрос цен', 'Борхиммаш ООО', new Date(2016, 5, 17), new Date(2016, 6, 12), 2500500],
    [135677, 'Закупка крепежных изделий', '75%', 'Аукцион', 'Новокуйбышевс', new Date(2016, 6, 5), new Date(2016, 7, 8), 3000000],
    [134568, 'Гайка на 2017 г.', '53 %', 'Запрос цен', 'Борхиммаш ООО', new Date(2016, 5, 17), new Date(2016, 6, 12), 2500500],
    [135677, 'Закупка крепежных изделий', '75%', 'Аукцион', 'Новокуйбышевс', new Date(2016, 6, 5), new Date(2016, 7, 8), 3000000],
    [134568, 'Гайка на 2017 г.', '53 %', 'Запрос цен', 'Борхиммаш ООО', new Date(2016, 5, 17), new Date(2016, 6, 12), 2500500],
    [135677, 'Закупка крепежных изделий', '75%', 'Аукцион', 'Новокуйбышевс', new Date(2016, 6, 5), new Date(2016, 7, 8), 3000000],
    [134568, 'Гайка на 2017 г.', '53 %', 'Запрос цен', 'Борхиммаш ООО', new Date(2016, 5, 17), new Date(2016, 6, 12), 2500500],
    [135677, 'Закупка крепежных изделий', '75%', 'Аукцион', 'Новокуйбышевс', new Date(2016, 6, 5), new Date(2016, 7, 8), 3000000],
    [134568, 'Гайка на 2017 г.', '53 %', 'Запрос цен', 'Борхиммаш ООО', new Date(2016, 5, 17), new Date(2016, 6, 12), 2500500],
  ]);

  var dataForBubble = google.visualization.arrayToDataTable([
    ['ID', 'Дата', 'Сумма', 'Процедура', 'Доля'],
    ['135677', new Date(2016, 6, 5), 3000000, 'Закупка крепежных изделий', 75],
    ['134568', new Date(2016, 5, 17), 2500500, 'Запрос цен', 53],
    ['134569', new Date(2016, 4, 13), 1000500, 'Запрос цен', 14],
    ['135677', new Date(2015, 6, 5), 3000000, 'Закупка крепежных изделий', 75],
    ['134568', new Date(2015, 5, 17), 2500500, 'Запрос цен', 53],
    ['134569', new Date(2015, 4, 13), 1000500, 'Запрос цен', 14],
    ['135677', new Date(2014, 6, 5), 3000000, 'Закупка крепежных изделий', 75],
    ['134568', new Date(2014, 5, 17), 2500500, 'Запрос цен', 53],
    ['134569', new Date(2014, 4, 13), 1000500, 'Запрос цен', 14],
    ['134569', new Date(2013, 4, 13), 1000500, 'Запрос цен', 14],

  ])

  var optionsBubble = {
    hAxis: {
      title: 'Дата, дни',
      format: 'MMM',
    },
    vAxis: { title: 'Цена контракта, млн. руб.', },
    bubble: {
      textStyle: {
        fontSize: 11
      }
    },
    colorAxis: { colors: ['yellow', 'red'], },
    legend: { position: 'none', },
    chartArea: {left:50,top:10,width:'80%',height:'80%'},
  };

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

  var table = new google.visualization.Table(document.getElementById('table_div'));
  table.draw(dataForTable, optionsTable);

  var bubble = new google.visualization.BubbleChart(document.getElementById('bubble_div'));
  bubble.draw(dataForBubble, optionsBubble);

  var rows = [].slice.call(document.querySelectorAll('.x-table__row'));

  // переход на след стр
  rows.forEach(function(item, index) {
    item.addEventListener('click', function() {
      document.location.href = "./index3.html"
    });
  })

  if (window.location.pathname === '/index3.html') {
    var rows = [].slice.call(document.querySelectorAll('.x-table__row'));
    rows.forEach(function(item, index) {
      if (index === 2) {
        item.classList.add('is-active')
      }
    })
  }

  google.visualization.events.addListener(table, 'select', function() {
    bubble.setSelection(table.getSelection());
    var currentRowIndex = table.getSelection()
    // номер строки таблицы (индекс), по которой было совершено действие
    currentRowIndex = currentRowIndex[0].row
  });

  google.visualization.events.addListener(bubble, 'select', function() {
    table.setSelection(bubble.getSelection());
  });
}
