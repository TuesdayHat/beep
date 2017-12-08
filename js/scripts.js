function beepCheck(num){
  var check = num;
  if (check === 1){
    return "Beep!"
  } else if (check === 0) {
    return "Boop!"
  }

  return check
}


//FRONTEND BELOW THIS LINE ===--------------------------------

$(document).ready(function() {
  $("#FORM").submit(function(event) {
    event.preventDefault();
    var input = parseInt($("#INPUT").val());
    var result = beepCheck(input);

    $("#result").text(result);

  });
});
