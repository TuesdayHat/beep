function beepCheck(num){
  var checkStr = num.toString();
  var match = checkStr.match(/[01]/);

  if (num % 3 === 0) {
    return "I'm sorry, Dave. I can't let you do that" ;
  } else if (match[0] === "1") {
    return "Boop!" ;
  } else if (match[0] === "0") {
    return "Beep!" ;
  } else {
    return num ;
  }

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
