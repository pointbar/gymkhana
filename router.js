Router.map(function() {
  this.route('cards-list', {
    path: '/',
  });
  
  this.route('card', {
    path: '/fiche/:slug',
    waitOn: function () {
      this.template = this.params.slug;
    },
    layoutTemplate: 'layout',
  });
});