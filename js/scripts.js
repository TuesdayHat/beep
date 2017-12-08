$(document).ready(function() {
  $("#FORM").submit(function(event) {
    event.preventDefault();
    var input = parseInt($("#INPUT").val());
    var result = input;

    $("#result").text(result);

  });
});
