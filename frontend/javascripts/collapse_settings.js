function collapseSettings() {
  var toggle = $('.js-toggle')
  var height = $('.x-settings').outerHeight()
  toggle.on('click', function() {
    if ($('.x-hexagon__corners').hasClass('is-collapsed')){
      $('.x-settings').css('height', '').css('overflow', '')
      $('.x-hexagon__corners').removeClass('is-collapsed')
    } else {
      $('.x-settings').css('height', '80px').css('overflow', 'hidden')
      $('.x-hexagon__corners').addClass('is-collapsed')
    }
  })
}
