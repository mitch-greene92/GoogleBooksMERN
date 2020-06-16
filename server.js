const express = require("express");

const mongoose = require("mongoose");
const routes = require("./routes");
const app = express();
const PORT = process.env.PORT || 3000;

// Define Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets
if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
}
// Add routes, both API and view
app.use(routes);

// Connect to Mongo DB
mongoose.connect(process.env.MONGODB_URI || "mongodb://heroku_z4pdxjkk:j94cb0tba78knjte6f4elgs8jv@ds125616.mlab.com:25616/heroku_z4pdxjkk");

// Start API server
app.listen(PORT, function() {
    console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`)
});