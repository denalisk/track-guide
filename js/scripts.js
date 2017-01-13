$(document).ready(function() {
  $(".intro").show();

  $(".next-button").click(function() {
    // this button hides the current page and shows the next one
    var currentPage = $(this).parent().parent();
    currentPage.hide();
    currentPage.next().show();
  });

});
