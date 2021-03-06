var express = require("express");
var bodyParser = require("body-parser");
var methodOverride = require("method-override");
var exphbs = require('express-handlebars');
var PORT = 3000;
var app = express();
// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static(process.cwd() + "/public"));
app.use(bodyParser.urlencoded({ extended: false }));

var db = require("./models");
// Override with POST having ?_method=DELETE
app.use(methodOverride("_method"));
// Set Handlebars.
// var exphbs = require("express-handlebars");
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");




// Import routes and give the server access to them.

// var root_routes = require("./controllers/burgers_controller.js")(app);
// app.use("/", root_routes);

// var api_routes = require("./routes/api-routes.js")(app);
// app.use("/api", api_routes);

// var html_routes = require("./routes/html-routes.js")(app);
// app.use("/", html_routes);

// require("./routes/api-routes.js")(app);
// require("./routes/html-routes.js")(app);

var routes = require("./routes/api-routes.js");
app.use("/", routes);
// Syncing our sequelize models and then starting our express app
 db.sequelize.sync({ force: true }).then(function() {
  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
});
