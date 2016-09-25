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
