Template.cardsList.cards = function() {
  return CardsList;
};

Template.cardsList.events({
    'click a': function() {
      $('div#card').hide();
      $('div#card').fadeIn(1000);
    }
});