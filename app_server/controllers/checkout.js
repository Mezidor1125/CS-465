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

/* GET checkout view (SNHU, 2023, p. 1) */

// const checkout variable that is used to set the declared function which takes the paramters req and res (SNHU, 2023, p. 1)
const checkout = (req, res) => {
    
    // function used to render view and send the rendered HTML string to the client, meaning sends the title Travlr Getaways to the client denoted by checkout (GeeksForGeeks, 2023, p. 1);(SNHU, 2023, p. 1)
    res.render('checkout', {title: 'Travlr Getaways' });
};

// object in the Node.js file that holds the exported values and functions from that module, in the case of it being the module exporting to the checkout variable (Megida, 2022, p. 1);(SNHU, 2023, p. 1)
module.exports = {
    checkout
};