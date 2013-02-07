Blog.Views.index = Backbone.View.extend({
  el: '#text-area',

  initialize: function(){
    this.collection = new Blog.Collections.articles("limit=4");
    this.collection.bind('reset', this.render, this);
    this.collection.fetch();
  },

  render: function(){
    var section = $('#section-articles'),
        articles = this.collection.toJSON();

    _.each(articles, function(article){
      section.append("<div class='media'> <a class='pull-left'><img class='media-object' src='/assets/avatar-small.png' /></a> <div class='media-body'><h4 class='media-heading'>"+article.title+"</h4> </div> <div class='article-content'>"+article.content+"</div> <a href='#' class='lupe'></a>");
    });
  }
});
