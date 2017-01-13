var valueAdd = function(selectedOption, value) {
  // adds a value to the score for a given track
  if ($(selectedOption).hasClass("frontbackend")) {
    frontbackendTrack += value;
  }
  else if ($(selectedOption).hasClass("companySize")) {
    companySizeTrack += value;
  }
  else if ($(selectedOption).hasClass("mobile")) {
    mobileTrack += value;
  }

}

var mobileTrack = 0;
var frontbackendTrack = 0;
var companySizeTrack = 0;
var experienceTrack = 0;




$(document).ready(function() {
  $(".question-3").show();

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
    var value = parseInt(selectedOption.val());
    valueAdd(selectedOption, value);
    console.log(value);
    console.log(experienceTrack);
    console.log(mobileTrack);
    console.log(companySizeTrack);
    console.log(frontbackendTrack);
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
