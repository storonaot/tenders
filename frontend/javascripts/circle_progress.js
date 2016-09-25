function circleProgressInit() {
  var persentage = 67;

  $('#progress').circleProgress({
    value: persentage / 100,
    size: 100,
    fill: {color: "#fff"},
    emptyFill: "#d9dada",
    startAngle: 0,
    thickness: 10,
    lineCap: "round",
  });
  // Для отображения процентов внутри прогресс-бара
  $('#progress').attr('data-content', persentage + '%');
}
