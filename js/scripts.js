function piglatin(){

var phrase=$("input#phrase").val();
var splitPhrase = phrase.split("");
if(splitPhrase[0]==="y"){
  
} else {
  alert("doesn't start with y")
}
};

$(document).ready(function() {

  $("#translator").submit(function(event) {
    event.preventDefault();
    piglatin();

  });
});
