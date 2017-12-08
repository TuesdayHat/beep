$(document).ready(function() {
  $("#FORM").submit(function(event) {
    event.preventDefault();
    var input = $("#INPUT").val();
    var result = input;

    $("#result").text(result);

  });
});
