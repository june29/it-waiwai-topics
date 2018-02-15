$(function() {
  SHUFFLE_COUNT = 20

  function start(topics) {
    $('#wrapper').click(function() {
      shuffle(topics, SHUFFLE_COUNT);
    });
  }

  function shuffle(topics, counter) {
    $('h2').remove();

    if (counter < 1) { return }

    var topic = _.sample(topics);

    $('h1').text(topic);

    setTimeout(function() { shuffle(topics, counter - 1)}, 50);
  }

  function fit() {
    $('#wrapper').width($(window).width()).height($(window).height());
  }

  FastClick.attach(document.body);

  fit();
  $(window).resize(fit);

  $.getJSON('./topics.json', function(data) {
    start(data);
  });
});
