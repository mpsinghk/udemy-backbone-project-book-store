app.routers.Router = Backbone.Router.extend({
    routes: {
        '': 'home',
        'category/:id': 'category',
        'category/:id/book/:bookId': 'book',
        '*default': '404'
    },

    home: function() {
        console.log('Home');
    },

    category: function(id) {
        console.log('Category ' + id);

        app.data.books = new app.models.Books(null, { catId: id });
        console.log(app.data.books.url());

        if (app.data.currentView) {
            app.data.currentView.remove();
            app.data.currentView = null;
        }

        app.data.currentView = new app.views.Books({
            collection: app.data.books
        });

        $('[data-id=books]')
            .empty()
            .append(app.data.currentView.$el)
            .addClass('is-visible')
            .siblings()
            .removeClass('is-visible');

        app.data.books.fetch({ reset: true });
    },

    book: function(id, bookId) {
        console.log('Book ' + bookId + ' from category ' + id);
    },

    404: function() {
        console.log('404');
    }
});
