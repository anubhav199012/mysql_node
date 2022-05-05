const express = require('express');
const cors = require("cors");
const app = express();
const mysql = require('mysql');

const sql = require("./config/db");


var corsOptions = {
  origin: "http://localhost:8081"
};

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(express.json()); /* bodyParser.json() is deprecated */

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true })); /* bodyParser.urlencoded() is deprecated */


// simple route
/* app.get("/", (req, res) => {
  res.json({ message: "Welcome to My application." });
}); */



app.use('/', require('./routes/user'));

sql.getConnection(function(err) {
  if (err) throw err;
  console.log("Connected!");
});


/* sql.query("SELECT * FROM TABLE_NAME",(err, data) => {
  if(err) {
      console.error(err);
      return;
  }
  // rows fetch
  console.log(data);
});
 */

// set port, listen for requests
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
