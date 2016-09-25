function additionalField() {
  $('.js-add').on('click', function() {
    var newField = '<div class="x-form__field-wrapper"><div class="x-form__field-inner"><input class="x-form__field js-autocomplete" name="regionName[]"></div><div class="x-form__field-button x-form__field-button--remove js-remove"></div></div>'
    $('.x-form__field-wrapper').last().after(newField)
    $('.js-remove').on('click', function() {
      $(this).parent().remove()
    })
  })
}
