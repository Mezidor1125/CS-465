// Lawrence Arundel CS 465 May 2023 

// Sources:
// Express, E. (2022, February 12). Cookie-parser. Express cookie-parser middleware., from https://expressjs.com/en/resources/middleware/cookie-parser.html 
// Express, E. (2022, February 12). Middleware Morgan., Middleware Morgan., from https://expressjs.com/en/resources/middleware/morgan.html
// GeeksForGeeks, G. F. G. (2023, March 16). Express.js res.render() function. GeeksforGeeks., from https://www.geeksforgeeks.org/express-js-res-render-function/ 
// GeeksForGeeks, G. F. G. (2023, March 16). Express.js express.Router() Function. GeeksforGeeks., from https://www.geeksforgeeks.org/express-js-express-router-function/
// Iconfinder, I. (2022, May 11). 0 user+login in Emoji &amp; Avatars category icons. Iconfinder., from https://www.iconfinder.com/emoji-avatars-icons?q=user%2Blogin 
// Krisdian, K. (2022, August 30). Millions of PNG images, backgrounds and vectors for free download. Pngtree., from https://pngtree.com/element/down?id=NDYzNzQwNw&amp;type=1&amp;time=1682209061&amp;token=Yjg5NDVjMGM5OWRmZTQ5ZjJiYmEwNDIyZTFjYThhNDY&amp;t=0 
// Megida, D. (2022, April 25). Module.exports – how to export in node.js and JavaScript. freeCodeCamp.org., from https://www.freecodecamp.org/news/module-exports-how-to-export-in-node-js-and-javascript/#:~:text=module.exports%20is%20an%20object,with%20the%20require%20global%20method. 
// Mozilla, M. (2022, February 1). Express tutorial part 4: Routes and controllers - learn web development: MDN. Learn web development | MDN., from https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs/routes 
// Mozilla, M. (2022, February 1). Express/Node introduction., Express/Node introduction., from https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs/Introduction
// NPM, N. P. M. (2022, May 11). HTTP-errors. npm., from https://www.npmjs.com/package/http-errors 
// Philiapp, P. (2022, February 2). X mark letters. X mark symbols - ✖., from https://www.piliapp.com/symbol/x-mark/ 
// Smith, D. (2021, April 11). Better placeholder. Better Placeholder., from https://betterplaceholder.com/ 
// SNHU, S. N. H. U. (2023, May 1). CS 465 Full Stack Guide., from https://learn.snhu.edu/d2l/home 
// W3Schools, W. S. (2022, April 11). Window history.back(). History back() Method., from https://www.w3schools.com/jsref/met_his_back.asp 
// W3Schools, W. S. (2022, April 11). HTML Entities. HTML Entities., from https://www.w3schools.com/html/html_entities.asp

// create/import HTTP errors for Express, Koa, Connect, etc. throughout the application (NPM, 2022, p. 1)
const express = require('express');

// create/import HTTP errors for Express, Koa, Connect, etc. throughout the application (NPM, 2022, p. 1)
const router = express.Router();

/* GET users listing. (SNHU, 2023, p. 1) */
router.get('/', function(req, res, next) {

  /* Send data to home page. (SNHU, 2023, p. 1) */
  res.send('respond with a resource');
});

// object in the Node.js file that holds the exported values and functions from that module, in the case of it being the module exporting to the router variable (Megida, 2022, p. 1);(SNHU, 2023, p. 1)
module.exports = router;
