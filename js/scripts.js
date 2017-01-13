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
  $(".question-6").show();

  var selectedOption = "placeholder";
  var prevOption = $(".info-row");
  var pickedOne = false;

  $(".question-1").submit(function(event) {
    // this function opens the next page from the radio button page
    event.preventDefault();
    selectedOption = $("input:radio[name=experience]:checked");
    var value = parseInt(selectedOption.val());
    valueAdd(selectedOption, value);
    var currentPage = $(this);
    console.log(currentPage);
    currentPage.hide();
    currentPage.next().show();
    console.log("experience " + experienceTrack);
  });


  $(".option").click(function() {
    // this function highlights the clicked option
    selectedOption = $(this);
    selectedOption.addClass("option-select");
    prevOption.removeClass("option-select");
    prevOption = selectedOption;
    pickedOne = true;
  });

  $(".next-option-button").click(function() {
    // this function adds the selectedOption to the value recorder
    if (pickedOne === true) {
      var value = parseInt(selectedOption.val());
      valueAdd(selectedOption, value);
    };
  });

  $(".next-option-button").click(function() {
    // this button hides the current page and shows the next one, for options
    if (pickedOne === true) {
      var value = selectedOption.val();
      var currentPage = $(this).parent().parent();
      currentPage.hide();
      currentPage.next().show();
      pickedOne = false;
      console.log("mobile " + mobileTrack);
      console.log("co size " + companySizeTrack);
      console.log("frontbackend " + frontbackendTrack);
      console.log("experience " + experienceTrack);
    }
  });

  $(".next-button").click(function() {
    // this button hides the current page and shows the next one, not for options
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
