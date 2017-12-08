function beepCheck(num){
  var checkStr = num.toString(); // turns input into a string

  if (num % 3 === 0 && num/3 >= 1) {
    return "I'm sorry, Dave. I can't let you do that" ;
  } else if (checkStr.search(/1/) > -1) { //looks for the number 1 in the string
    return "Boop!" ;
  } else if (checkStr.search(/0/) > -1) {
    return "Beep!" ;
  } else {
    return num ;
  }
}

function beep(num){
  var numbers = [];
  for (var i=0; i<=num; i++){
    numbers.push(beepCheck(i))
  }
  return numbers
}


//FRONTEND BELOW THIS LINE ===--------------------------------

$(document).ready(function() {
  $("#FORM").submit(function(event) {
    event.preventDefault();
    var input = parseInt($("#INPUT").val());
    var result = beep(input);

    $("#result").empty();

    for (var k = 0; k<result.length; k++){
      $("#result").append(result[k] + "</br>");
    }

  });
});
