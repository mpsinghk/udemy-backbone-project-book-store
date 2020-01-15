// Adding routes for the App
app.routers.Router = Backbone.Router.extend({
    routes: {
        '': 'home',
        'category/:id': 'category',
        'category/:id/book/:bookId': 'book',
        '*default': '404'
    },

    home: function() {
        // console.log('Home');

        if (app.data.currentView) {
            app.data.currentView.remove();
            app.data.currentView = null;
        }

        $('[data-id=home]')
            .addClass('is-visible')
            .siblings()
            .removeClass('is-visible');
    },

    category: function(id) {
        // console.log('Category ' + id);

        app.data.books = new app.models.Books(null, { catId: id });
        // console.log(app.data.books.url());

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
        // console.log('Book ' + bookId + ' from category ' + id);

        app.data.book = new app.models.Book({ id: bookId });

        if (app.data.currentView) {
            app.data.currentView.remove();
            app.data.currentView = null;
        }

        app.data.currentView = new app.views.Book({
            model: app.data.book
        });

        $('[data-id=book]')
            .empty()
            .append(app.data.currentView.$el)
            .addClass('is-visible')
            .siblings()
            .removeClass('is-visible');

        app.data.book.fetch();
    },

    404: function() {
        // console.log('404');

        if (app.data.currentView) {
            app.data.currentView.remove();
            app.data.currentView = null;
        }

        $('[data-id=four-o-four]')
            .addClass('is-visible')
            .siblings()
            .removeClass('is-visible');
    }
});
