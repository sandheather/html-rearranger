var $newHeadingBelow = $('<h1>');
var $newUl1 = $('<ul>');
var $newHeadingAbove = $('<h1>');
var $newUl2 = $('<ul>');

$newHeadingBelow.html('Below ground veggies');
$('body').append($newHeadingBelow);
$('body').append($newUl1);

$newHeadingAbove.html('Above ground veggies');
$('body').append($newHeadingAbove);
$('body').append($newUl2);

$('ul li').each(function () {
  if ($(this).hasClass('below')) {
    $newUl1.append($(this));
  } else {
    $newUl2.append($(this));
  }
});

