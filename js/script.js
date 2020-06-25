// Rendo disponibili le funzionalità al solo caricamento completo del documento
$(document).ready(
  function () {
    var numeroQuadratini = 36
    // var numeroQuadratini = parseInt(prompt('Quanti quadratini totali vuoi creare? (Per l\' esercizio digitare 36)'))
    for (var i = 0; i < numeroQuadratini; i++) {
      $('.container').append('<div class="quadratino"></div>')
    }

    $(document).on('click','.quadratino',function () {
      var quelloLi = $(this)
      $(quelloLi).removeClass('yellow').removeClass('green')

      $.ajax(
        {
          url: 'https://flynn.boolean.careers/exercises/api/random/int',
          method: 'GET',
          success: function (data) {
            var numeroRandom = data.response
            $(quelloLi).text(numeroRandom)
            if (numeroRandom <= 5) {
              $(quelloLi).addClass('yellow')
            } else {
              $(quelloLi).addClass('green')
            }
          }
        }
      )

    })
  }
)
