Blog.Views.index = Backbone.View.extend({
  el: '#text-area',

  initialize: function(){
    this.collection = new Blog.Collections.articles("limit=4");
    this.collection.bind('reset', this.render, this).fetch();
    this.template = _.template(this.$('.fn-article-template').text());
  },

  render: function(){
    var section = this.$('#section-articles'),
        articles = this.collection.toJSON(),
        self =  this;

    _.each(articles, function(article){
      section.append(self.template({article: article}));
    });
  }
});
