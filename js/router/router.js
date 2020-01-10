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
    },

    book: function(id, bookId) {
        console.log('Book ' + bookId + ' from category ' + id);
    },

    404: function() {
        console.log('404');
    }
});
