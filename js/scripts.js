

$(document).ready(function() {
  $(".question-2").show();

  var selectedOption = "blank";
  var prevOption = $(".info-row");

  $(".option").click(function() {
    // this function selects the clicked option and adds its value to the recorded values
    selectedOption = $(this);
    console.log(selectedOption + "  " + prevOption);
    selectedOption.addClass("option-select");
    prevOption.removeClass("option-select");
    prevOption = selectedOption;

  });

  $(".next-button").click(function() {
    // this button hides the current page and shows the next one
    var currentPage = $(this).parent().parent();
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
