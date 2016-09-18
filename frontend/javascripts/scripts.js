$(document).ready(function() {
  addRemoveField()
  validationForm()
  autocompleteRegion()
  $('.js-add').on('click', autocompleteRegion)
  toggleForm()
});

function addRemoveField() {
  $('.js-add').on('click', function() {
    var newField = '<div class="x-form__field-wrapper"><div class="x-form__field-inner"><input class="x-form__field js-autocomplete" name="regionName[]"></div><div class="x-form__field-button x-form__field-button--remove js-remove"></div></div>'
    $('.x-form__field-wrapper').last().after(newField)
    $('.js-remove').on('click', function() {
      $(this).parent().remove()
    })
  })
}

function validationForm() {
  $(".x-form").validate({
    rules: {
      companyName: {
        required: true,
      },
      productName: {
        required: true,
      },
      dateFrom: {
        required: true,
      },
      dateTo: {
        required: true,
      },
      'regionName[]': {
        required: true,
      },
    },

    messages: {
      companyName: {
        required: "Обязательно для заполнения",
      },
      productName: {
        required: "Обязательно для заполнения",
      },
      dateFrom: {
        required: "Введите дату",
      },
      dateTo: {
        required: "Введите дату",
      },
      'regionName[]': {
        required: "Обязательно для заполнения",
      },
    }
  })
}

function autocompleteRegion() {
  var regions = [
    'Адыгея респ.',
    'Алтай респ.',
    'Башкортостан респ.',
    'Бурятия респ.',
    'Дагестан респ.',
    'Ингушетия респ.',
    'Кабардино-Балкарская респ.',
    'Калмыкия респ.',
    'Карачаево-Черкесская респ.',
    'Карелия респ.',
    'Коми респ.',
    'Марий Эл респ.',
    'Мордовия респ.',
    'Саха (Якутия)',
    'Северная Осетия — Алания',
    'Татарстан респ.',
    'Тыва (Тува) респ.',
    'Удмуртская респ.',
    'Хакасия респ.',
    'Чеченская респ.',
    'Чувашская респ.',
    'Автономная республика Крым',
    'Алтайский край',
    'Забайкальский край',
    'Камчатский край',
    'Краснодарский край',
    'Красноярский край',
    'Пермский край',
    'Приморский край',
    'Ставропольский край',
    'Хабаровский край',
    'Амурская обл.',
    'Архангельская обл.',
    'Астраханская обл.',
    'Белгородская обл.',
    'Брянская обл.',
    'Владимирская обл.',
    'Волгоградская обл.',
    'Вологодская обл.',
    'Воронежская обл.',
    'Ивановская обл.',
    'Иркутская обл.',
    'Калининградская обл.',
    'Калужская обл.',
    'Кемеровская обл.',
    'Кировская обл.',
    'Костромская обл.',
    'Курганская обл.',
    'Курская обл.',
    'Ленинградская обл.',
    'Липецкая обл.',
    'Магаданская обл.',
    'Московская обл.',
    'Мурманская обл.',
    'Нижегородская обл.',
    'Новгородская обл.',
    'Новосибирская обл.',
    'Омская обл.',
    'Оренбургская обл.',
    'Орловская обл.',
    'Пензенская обл.',
    'Псковская обл.',
    'Ростовская обл.',
    'Рязанская обл.',
    'Самарская обл.',
    'Саратовская обл.',
    'Сахалинская обл.',
    'Свердловская обл.',
    'Смоленская обл.',
    'Тамбовская обл.',
    'Тверская обл.',
    'Томская обл.',
    'Тульская обл.',
    'Тюменская обл.',
    'Ульяновская обл.',
    'Челябинская обл.',
    'Ярославская обл.',
    'Москва',
    'Санкт-Петербург',
    'Севастополь',
    'Еврейская авт. обл.',
    'Ненецкий авт. окр.',
    'Ханты-Мансийский авт. окр.',
    'Чукотский авт. окр.',
    'Ямало-Ненецкий авт. окр.',
  ]

  $('.js-autocomplete').autocomplete({
    source: regions,
  })
}

function toggleForm() {
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
