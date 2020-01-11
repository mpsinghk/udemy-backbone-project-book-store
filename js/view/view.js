app.views.Books = Backbone.View.extend({
    initialize: function(options) {
        this.options = options;
        this.listenTo(this.collection, 'change reset', this.render);
    },

    render: function() {
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

app.views.Book = Backbone.View.extend({
    initialize: function() {
        this.listenTo(this.model, 'change', this.render);
    },

    render: function() {
        var info = this.model.get('volumeInfo');
        var images = info.imageLinks;

        this.$el.html(
            '<header class="book-header">' +
                '<div class="book-img">' +
                '<img src="' +
                (images.medium ||
                    images.small ||
                    images.thumbnail ||
                    images.smallThumbnail) +
                '" alt="' +
                (info.title ? info.title : 'Title not available') +
                '" />' +
                '</div >' +
                '<div class="book-info">' +
                '<h2>' +
                (info.title ? info.title : 'Title not available') +
                '</h2>' +
                '<h3><strong>' +
                (info.authors ? info.authors.join(', ') : 'Author not available') +
                '</strong> - ' +
                (info.publishedDate ? info.publishedDate : 'Publish date not available') +
                '</h3>' +
                '<h4>' +
                (info.publisher ? info.publisher : 'Publisher not available') +
                '</h4>' +
                '</div>' +
                '</header >' +
                '<article class="book-desc">' +
                (info.description ? info.description : 'Description not available') +
                '</article>'
        );

        return this;
    }
});
