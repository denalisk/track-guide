// BEGIN BACK END
var mobileTrack = 0;
var frontbackendTrack = 0;
var companySizeTrack = 0;
var experienceTrack = 0;

var frontbackendResults = "";
var companySizeLanguages = "";
var companySizeResults = "";


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

var showLastPage = function() {
  // goes over the values returned throughout the survey and chooses what elements of the last page to display
  if (frontbackendTrack > 0) {
    frontbackendResults = "backend";
  }
  else if (frontbackendTrack === 0) {
    frontbackendResults = "full stack";
  }
  else if (frontbackendTrack < 0) {
    frontbackendResults = "frontend";
  };

  if (experienceTrack > 0) {
    $(".experienceResults1").show();
  }
  else if (experienceTrack === 0) {
    $(".experienceResults0").show();
  }
  else if (experienceTrack < 0) {
    $(".experienceResults-1").show();
    if (frontbackendTrack > 0) {
      $("experienceResults-1-backend").show();
    }
    else {
      $("experienceResults-1-frontend").show();
    };
  };
  if (mobileTrack === 1) {
    $("mobileResults1").show();
  }
};



// BEGIN FRONT END


$(document).ready(function() {
  $(".intro").show();

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
      var currentPage = $(this).parent().parent();
      currentPage.hide();
      currentPage.next().show();
      pickedOne = false;
      console.log("mobile " + mobileTrack);
      console.log("co size " + companySizeTrack);
      console.log("frontbackend " + frontbackendTrack);
      console.log("experience " + experienceTrack);
    };
  });

  $(".next-button").click(function() {
    // this button hides the current page and shows the next one, not for options
    var currentPage = $(this).parent().parent();
    currentPage.hide();
    currentPage.next().show();
  });

  $(".final-button").click(function() {
    // this button displays the final page, with differing elements depending on what values were returned
    if (pickedOne === true) {
      var value = parseInt(selectedOption.val());
      valueAdd(selectedOption, value);
      var currentPage = $(this).parent().parent();
      currentPage.hide();
      currentPage.next().show();
      currentPage.next().find(".result-p").hide();
      console.log("last button!");
      console.log("mobile " + mobileTrack);
      console.log("co size " + companySizeTrack);
      console.log("frontbackend " + frontbackendTrack);
      console.log("experience " + experienceTrack);
      if (frontbackendTrack > 0) {
        frontbackendResults = "backend";
        $(".frontbackendResults").text(frontbackendResults);
        console.log(frontbackendResults);
      }
      else if (frontbackendTrack === 0) {
        frontbackendResults = "full stack";
        $(".frontbackendResults").text(frontbackendResults);
        console.log(frontbackendResults);
      }
      else if (frontbackendTrack < 0) {
        frontbackendResults = "frontend";
        $(".frontbackendResults").text(frontbackendResults);
        console.log(frontbackendResults);
      };

      if (experienceTrack > 0) {
        $(".experienceResults1").show();
      }
      else if (experienceTrack === 0) {
        $(".experienceResults0").show();
      }
      else if (experienceTrack < 0) {
        $(".experienceResults-1").show();
        if (frontbackendTrack > 0) {
          $(".experienceResults-1-backend").show();
        }
        else {
          $(".experienceResults-1-frontend").show();
        };
      };
      if (mobileTrack === 1) {
        $(".mobileResults1").show();
      }
      if (companySizeResults > 0) {
        $(".companySizeLanguages").text("C#, .NET, or Java,");
        $(".companySizeResults").text("bigger");
      }
      else if (companySizeResults < 0) {
        $(".companySizeLanguages").text("Python, Ruby, or PHP,");
        $(".companySizeResults").text("smaller");
      }
      else {
        $(".companySizeLanguages").text("Python, Ruby, or PHP,");
        $(".companySizeResults").text("medium-sized");
      }
    }
    else {
      console.log("something's wrong");
      pickedOne = false;
    };
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

  $(".start-over-button").click(function() {
    // takes the user back to the first page
    $(this).parent().parent().hide();
    location.reload();
  })

});
