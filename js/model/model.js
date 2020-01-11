app.models.Books = Backbone.Collection.extend({
    initialize: function(models, options) {
        this.options = options;
    },

    url: function() {
        return 'api/books_' + this.options.catId + '.json';
    }
});

app.models.Book = Backbone.Model.extend({
    url: function() {
        return 'api/book_' + this.attributes.id + '.json';
    }
});
