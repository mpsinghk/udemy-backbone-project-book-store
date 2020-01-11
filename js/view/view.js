app.views.Books = Backbone.View.extend({
    initialize: function(options) {
        this.options = options;
        this.listenTo(this.collection, 'change reset', this.render);
    },

    render: function() {
        console.log('List of books: render');

        this.$el.html(
            '<h1>' + this.collection.options.catId + '</h1><ul class="books-list"></ul>'
        );
        var $ul = $('ul.books-list', this.$el);
        var bookPath = '#category/' + this.collection.options.catId + '/book/';

        this.collection.each(function(model) {
            $ul.append(
                '<li>' +
                    '<a href="' +
                    bookPath +
                    model.get('id') +
                    '" title="' +
                    model.get('volumeInfo').title +
                    '">' +
                    '<span class="overlay"></span>' +
                    '<img src="' +
                    model.get('volumeInfo').imageLinks.thumbnail +
                    '" alt="' +
                    model.get('volumeInfo').title +
                    '"/>' +
                    '</a>' +
                    '</li>'
            );
        });

        return this;
    }
});
