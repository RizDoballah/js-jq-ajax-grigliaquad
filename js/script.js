// richiesta AJAX che prende un numero random da 1 a 9.
// Se è <= 5 il quadrato diventa giallo,
// se è > di 5 il quadrato diventa verde.
// Il numero ottenuto appare al centro del quadrato.

// $(document).ready(function() {
//   $('.box').click(function() {
//     var box = $(this);
//     console.log(box);
//     $.ajax(
//       {
//         url: "https://flynn.boolean.careers/exercises/api/random/int",
//         method: "GET",
//         success: function (data) {
//           console.log(box);
//           console.log(data.response);
//             if (data.response <= 5) {
//               box.addClass('yellow');
//             } else if (data.response > 5) {
//               box.addClass('green');
//             }
//             box.text(data.response);
//         },
//         error: function () {
//           alert("E' avvenuto un errore. ");
//         }
//       }
//     );
//
//   });
// });
$(document).ready(function() {
  for (var i = 0; i < 36; i++) {
    $('<div class="box"><h3></h3></div>').appendTo($('#row'))
  }
  $(document).on('click', '.box', function () {
    var box = $(this);
    $.ajax(
        {
          url: "https://flynn.boolean.careers/exercises/api/random/int",
          method: "GET",
          success: function (data) {
            console.log(box);
            console.log(data.response);
            if (data.response <= 5) {
              box.addClass('yellow');
              } else if (data.response > 5) {
                box.addClass('green');
              }
              box.text(data.response);
            },
            error: function () {
              alert("E' avvenuto un errore. ");
            }
          }
        );

  });

});
