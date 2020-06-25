// Rendo disponibili le funzionalità al solo caricamento completo del documento
$(document).ready(
  function () {
    var numeroQuadratini = 36
    // Nel caso si voglia customizzare la quantità di quadratini de-commentare la riga sottostante
    // var numeroQuadratini = parseInt(prompt('Quanti quadratini totali vuoi creare? (Per l\' esercizio digitare 36)'))
    for (var i = 0; i < numeroQuadratini; i++) {
      $('.container').append('<div class="quadratino"></div>')
    }
    // Aggiungo funzionalità al click sul singolo quadratino
    $(document).on('click','.quadratino',function () {
      var quelloLi = $(this)
      // Reset in caso di re-click
      $(quelloLi).removeClass('yellow').removeClass('green')
      // Collegamento richiesta ajax
      $.ajax(
        {
          url: 'https://flynn.boolean.careers/exercises/api/random/int',
          method: 'GET',
          success: function (data) {
            var numeroRandom = data.response
            $(quelloLi).text(numeroRandom)
            // Imposto condizione che regola il colore finale del quadratino a seconda del numero
            if (numeroRandom <= 5) {
              $(quelloLi).addClass('yellow')
            } else {
              $(quelloLi).addClass('green')
            }
          },
          // Imposto eventuale messaggio di errore
          error: function (richiesta, stato, errori) {
            alert("Attenzione! Si è verificato un errore.");
          }
        }
      )
    })
  }
)
