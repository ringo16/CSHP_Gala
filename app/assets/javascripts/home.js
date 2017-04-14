$(window).scroll(function(e) {
  if ($(this).scrollTop() > 0)
    $('#cshpgala .navbar').addClass('isScrolling');
  else
    $('#cshpgala .navbar').removeClass('isScrolling');
});

$(document).ready(function() {
  var text = 'Super Jasmine';
  var counter = 1;
  setInterval(function() {
    $('.timeBox').text(text.substring(0, counter));
    counter = counter < text.length ? counter + 1 : 1;;
  }, 200);
});