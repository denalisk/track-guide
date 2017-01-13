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
  else {
    experienceTrack += value;
  }

};

var mobileTrack = 0;
var frontbackendTrack = 0;
var companySizeTrack = 0;
var experienceTrack = 0;




$(document).ready(function() {
  $(".intro").show();

  var selectedOption = "blank";
  var prevOption = $(".info-row");

  $(".option").click(function() {
    // this function highlights the clicked option
    selectedOption = $(this);
    selectedOption.addClass("option-select");
    prevOption.removeClass("option-select");
    prevOption = selectedOption;

  });

  $(".next-option-button").click(function() {
    // this function adds the selectedOption to the value recorder
    var value = parseInt(selectedOption.val());
    valueAdd(selectedOption, value);
    console.log(value);
    console.log("experience " + experienceTrack);
    console.log("mobile " + mobileTrack);
    console.log("company size " + companySizeTrack);
    console.log("front or back end " + frontbackendTrack);
  });

  $(".next-button").click(function() {
    // this button hides the current page and shows the next one, for options
    var currentPage = $(this).parent().parent();
    currentPage.hide();
    currentPage.next().show();
  });

  $(".next-option-button").click(function() {
    // this button hides the current page and shows the next one, for options
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
