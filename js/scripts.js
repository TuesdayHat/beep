function beepCheck(num){
  var check = num;
  var checkStr = check.toString();
  console.log(checkStr);
  if (check === 1 || checkStr[0] === "1"){
    return "Beep!" ;
  } else if (check === 0 || checkStr[0] === "0") {
    return "Boop!" ;
  }

  return check ;
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
