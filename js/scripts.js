$(document).ready(function() {
  $(".question-1").show();

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
