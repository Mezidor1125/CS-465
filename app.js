// Lawrence Arundel CS 465 May 2023 

// Sources:
// Express, E. (2022, February 12). Cookie-parser. Express cookie-parser middleware., from https://expressjs.com/en/resources/middleware/cookie-parser.html 
// Express, E. (2022, February 12). Middleware Morgan., Middleware Morgan., from https://expressjs.com/en/resources/middleware/morgan.html
// GeeksForGeeks, G. F. G. (2023, March 16). Express.js res.render() function. GeeksforGeeks., from https://www.geeksforgeeks.org/express-js-res-render-function/ 
// GeeksForGeeks, G. F. G. (2023, March 16). Express.js express.Router() Function. GeeksforGeeks., from https://www.geeksforgeeks.org/express-js-express-router-function/
// Megida, D. (2022, April 25). Module.exports – how to export in node.js and JavaScript. freeCodeCamp.org., from https://www.freecodecamp.org/news/module-exports-how-to-export-in-node-js-and-javascript/#:~:text=module.exports%20is%20an%20object,with%20the%20require%20global%20method. 
// Mozilla, M. (2022, February 1). Express tutorial part 4: Routes and controllers - learn web development: MDN. Learn web development | MDN., from https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs/routes 
// Mozilla, M. (2022, February 1). Express/Node introduction., Express/Node introduction., from https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs/Introduction
// NPM, N. P. M. (2022, May 11). HTTP-errors. npm., from https://www.npmjs.com/package/http-errors 
// Philiapp, P. (2022, February 2). X mark letters. X mark symbols - ✖., from https://www.piliapp.com/symbol/x-mark/ 
// SNHU, S. N. H. U. (2023, May 1). CS 465 Full Stack Guide., from https://learn.snhu.edu/d2l/home 
// Yaytext, Y. (2021, May 1). 🛒 shopping cart emoji. YayText!, from https://yaytext.com/emoji/shopping-cart/ 

// create/import HTTP errors for Express, Koa, Connect, etc. throughout the application (NPM, 2022, p. 1)
const createError = require('http-errors');

// create/import HTTP errors for Express, Koa, Connect, etc. throughout the application (NPM, 2022, p. 1)
const express = require('express');

// create/import HTTP errors and path requirements for Express, Koa, Connect, etc. throughout the application (NPM, 2022, p. 1)
const path = require('path');

// create/import a new cookie parser middleware function using the given secret and options required within the application (Express, 2022, p. 1)
const cookieParser = require('cookie-parser');

// create/import http request logger middleware for node.js to create a new morgan logger using the given format and options within application (Express, 2022, p. 1)
const logger = require('morgan');

// create/import HTTP errors for Express, Koa, Connect, etc. throughout the application (NPM, 2022, p. 1)
const hbs = require('hbs');

// index router required for the middleware chain to direct proper responses within Node.js framework (Mozilla, 2022, p. 1)
const indexRouter = require('./app_server/routes/index');

// user router required for the middleware chain to direct proper responses within Node.js framework (Mozilla, 2022, p. 1)
const usersRouter = require('./app_server/routes/users');

// travel router required for the middleware chain to direct proper responses within Node.js framework (Mozilla, 2022, p. 1)
const travelRouter = require('./app_server/routes/travel');

// function that allows application to access the properties and functions within the Express framework (Mozilla, 2022, p. 1)
const app = express();

// engine setup within the application provided (SNHU, 2023, p. 1)
app.set('views', path.join(__dirname, 'app_server', 'views'));

// register handlebars partials (NPM, 2021, p. 1)
hbs.registerPartials(path.join(__dirname, 'app_server','views/partials'));

// engine setup within the application provided (SNHU, 2023, p. 1)
app.set('view engine', 'hbs');

// statements that set the view engine and the view directory for the application that allows you to write HTML templates with embedded JavaScript (Mozilla, 2022, p. 1)
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// configures middleware for the application utilizing the index router variable (Mozilla, 2022, p. 1)
app.use('/', indexRouter);

// configures middleware for the application utilizing the user router variable (Mozilla, 2022, p. 1)
app.use('/users', usersRouter);

// configures middleware for the application utilizing the travel router variable (Mozilla, 2022, p. 1)
app.use('/travel', travelRouter);

// catches the 404 error message and forwards the error handler within the application (SNHU, 2023, p. 1)
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler functions within the application (SNHU, 2023, p. 1)
app.use(function(err, req, res, next) {

  // sets the locals of the application, providing the error within the development (SNHU, 2023, p. 1)
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // renders the error page within the application (SNHU, 2023, p. 1)
  res.status(err.status || 500);
  res.render('error');
});

// object in the Node.js file that holds the exported values and functions from that module, in the case of it being the module exporting to the app variable (Megida, 2022, p. 1);(SNHU, 2023, p. 1)
module.exports = app;
