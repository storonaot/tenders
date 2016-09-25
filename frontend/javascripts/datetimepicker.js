function datetimepickerInit() {
  $.datetimepicker.setLocale('ru')

  $('#date_timepicker_start').datetimepicker({
    format: 'd/m/Y',
    onShow: function(ct) {
      this.setOptions({
        maxDate: $('#date_timepicker_end').val() ? $('#date_timepicker_end').val() : false,
        formatDate:'d/m/Y'
      })
    },
    timepicker: false,
  })
  $('#date_timepicker_end').datetimepicker({
    format:'d/m/Y',
    onShow: function(ct) {
        this.setOptions({
        minDate: $('#date_timepicker_start').val() ? $('#date_timepicker_start').val() : false,
        formatDate:'d/m/Y'
      })
    },
    timepicker: false,
  })
}
