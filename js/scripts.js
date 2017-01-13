var valueAdd = function(track, score, newVal) {
  // adds a value to the score for a given track
  score += newVal;

}




$(document).ready(function() {
  $(".question-2").show();

  var selectedOption = "blank";
  var prevOption = $(".info-row");

  $(".option").click(function() {
    // this function highlights the clicked option
    selectedOption = $(this);
    selectedOption.addClass("option-select");
    prevOption.removeClass("option-select");
    prevOption = selectedOption;

  });

  $(".next-button").click(function() {
    // this function adds the selectedOption to the value recorder
    var value = selectedOption.val();
    console.log(value);
  });

  $(".next-button").click(function() {
    // this button hides the current page and shows the next one
    var currentPage = $(this).parent().parent();
    var value = selectedOption.val();
    currentPage.hide();
    currentPage.next().show();
  });

  $(".info-button").mouseenter(function() {
    // this button shows the info on mouseover
    $(this).next().show();
    $(this).hide();

  });

  $(".info").mouseleave(function() {
    // this button hides the info on leaving mouseover
    $(this).hide();
    $(this).prev().show();
  });

});
