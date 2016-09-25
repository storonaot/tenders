//Переменные для круговой диаграммы и легенды
//TODO: добавить нужные цвета
var colorsPieOne = ['#f2cc2f', '#eb5655', '#7ec181', '#4099c6']
var dataArrPieOne = [
  {
    name: 'Категория №1',
    quantity: 174,
    portion: '(от 75%-100% лотов из тендера соответсвует продукции вашей компании)',
  },
  {
    name: 'Категория №2',
    quantity: 133,
    portion: '(от 75%-100% лотов из тендера соответсвует продукции вашей компании)',
  },
  {
    name: 'Категория №3',
    quantity: 307,
    portion: '(от 75%-100% лотов из тендера соответсвует продукции вашей компании)',
  },
  {
    name: 'Категория №4',
    quantity: 410,
    portion: '(от 75%-100% лотов из тендера соответсвует продукции вашей компании)',
  },
]

function drawPieChart() {
// Define the chart to be drawn.
  var data = new google.visualization.DataTable()
  var options = {
          legend: 'none',
          colors: colorsPieOne,
        };
  data.addColumn('string', 'Element')
  data.addColumn('number', 'Percentage')
  data.addRows([
    ['Категория № 1', 174],
    ['Категория № 2', 133],
    ['Категория № 3', 307],
    ['Категория № 4', 410],
  ]);
  // Instantiate and draw the chart.
  var chart = new google.visualization.PieChart(document.getElementById('myPieChart'));
  chart.draw(data, options);
}

function drawLegend(arr, colors) {
  var myHTML = "";
  var template = "<li class='x-legend__item'><div>#quantity# тендеров</div><div><span style='color:#color#'>#name#</span> #portion#</div></li>"
  var temporaryString = "";

  arr.forEach(function(item, index) {
    temporaryString = template;
    temporaryString = temporaryString.replace("#color#", colors[index]);
    temporaryString = temporaryString.replace("#quantity#", arr[index].quantity);
    temporaryString = temporaryString.replace("#name#", arr[index].name);
    temporaryString = temporaryString.replace("#portion#", arr[index].portion);

    myHTML += temporaryString;
  })

  var myList = document.getElementsByClassName('x-legend__list')[0];
  myList.innerHTML = myHTML;
}
