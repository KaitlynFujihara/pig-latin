var vowels= ["a","e","i","o","u"];



function piglatin(){

var phrase=$("input#phrase").val();
var splitPhrase = phrase.split("");
var firstLetter= splitPhrase[0]

 for(var i=0;i<vowels.length;i++){
  if (vowels[i] === firstLetter) {
    $(".result").text(phrase+"way")
  }
}
};


$(document).ready(function() {
  $("#translator").submit(function(event) {
    event.preventDefault();
    piglatin();
    $(".result").show();
  });
});
