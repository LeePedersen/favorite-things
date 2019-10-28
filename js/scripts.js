$(document).ready(function() {
    $("form#questions").submit(function(event) {
      var q1 = $("#iceCream").val();
      var q2 = $("#season").val();
      var q3 = $("#superHero").val();
      var q4 = $("#book").val();
      var answers = [q1, q2, q3, q4];
      alert(answers);
      event.preventDefault();
  });
});
