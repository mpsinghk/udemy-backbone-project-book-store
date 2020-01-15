// Launch Backbone App
jQuery(function($) {
    app.data.router = new app.routers.Router();
    Backbone.history.start();
});
