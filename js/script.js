// richiesta AJAX che prende un numero random da 1 a 9.
// Se è <= 5 il quadrato diventa giallo,
// se è > di 5 il quadrato diventa verde.
// Il numero ottenuto appare al centro del quadrato.
$(document).ready(function() {
  $.ajax(
{
url: "https://flynn.boolean.careers/exercises/api/random/int",
method: "GET",
success: function (data) {
console.log(data.response);
$('.box').click(function() {
  if (data.response <= 5) {
  $(this).addClass('yellow');
  } else if (data.response > 5) {
  $(this).addClass('green');
  }
  $(this).text(data.response);
});
},
error: function () {
alert("E' avvenuto un errore. ");
}
}
);
});
