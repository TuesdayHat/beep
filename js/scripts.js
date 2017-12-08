function beepCheck(num){
  var checkStr = num.toString(); // turns input into a string

  if (num % 3 === 0 && num/3 >= 1) {
    return "hal" ;
  } else if (checkStr.search(/1/) > -1) { //looks for the number 1 in the string
    return "1" ;
  } else if (checkStr.search(/0/) > -1) {
    return "0" ;
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
    var input = parseInt($("#number").val());
    var result = beep(input);
    var name = $("#name").val();

    $("#result").empty();

    for (var k = 0; k<result.length; k++){
      if(result[k] === "hal"){
        $("#result").append("I'm Sorry, "+ name + ". " + "I can't let you do that" +"</br>");
      } else if (result[k] === "1") {
        $("#result").append("Boop!" + "</br>");
      } else if (result[k] === "0") {
        $("#result").append("Beep!" + "</br>");
      } else {
        $("#result").append(result[k] + "</br>");
      }
    }

  });
});
