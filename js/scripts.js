$(document).ready(function() {
    $("form#questions").submit(function(event) {
      var answers = ['iceCream', 'season', 'superHero', 'book'];

      answers.forEach(function(answer){
        var userInput = $('input#' + answer).val();
        $('.' + answer).text(userInput);
      });
      // var q1 = $("#iceCream").val();
      // var q2 = $("#season").val();
      // var q3 = $("#superHero").val();
      // var q4 = $("#book").val();
      // var answers = [q1, q2, q3, q4];

//answers[1], answers[0], answers[2]
      // var results = [];
      // results.push(answers[1]);
      // results.push(answers[0]);
      // results.push(answers[2]);
      //
      // $("#ans1").text(q1);
      // $("#ans2").text(results[1]);
      // $("#ans3").text(results[2]);


      event.preventDefault();
  });
});
