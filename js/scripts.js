  var vowels= ["a","e","i","o","u"];

function piglatin(phrase){
  var firstLetter= phrase[0];
  var firstAndSecond= phrase[0,1];
  var splitPhrase= phrase.split("");
  var consonant= splitPhrase.splice(0,2)
  var finalConsonant=phrase.substring(phrase.length );
  var finalPhrase=" ";
  console.log(finalPhrase);

    if (vowels.includes(firstLetter)) {
      finalPhrase=phrase+"way"
    } else {
      finalPhrase=phrase+"ay"
    };
};

$(document).ready(function() {
  $("#translator").submit(function(event) {
    event.preventDefault();
    var phrase=$("input#phrase").val();
    piglatin(phrase);
    $(".result").show();
    $(finalPhrase).append(".result");
  });
});
