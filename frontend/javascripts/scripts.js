$(document).ready(function() {
  datetimepickerInit()
  additionalField()
  validationForm()
  autocompleteRegion()
  $('.js-add').on('click', autocompleteRegion)
  collapseSettings();
  google.charts.load('current', {'packages': ['table', 'corechart'], 'language': 'ru'});
  if (document.querySelector('#myPieChart')) {
    google.charts.setOnLoadCallback(drawPieChart)
    drawLegend(dataArrPieOne, colorsPieOne);
  }
  if (document.querySelector('#table_div')) {
    google.charts.setOnLoadCallback(drawBubbleChart);
  }
  circleProgressInit();
  if (document.querySelector('#piechartTwo')) {
    google.charts.setOnLoadCallback(drawPieChartTwo)
  }
});
