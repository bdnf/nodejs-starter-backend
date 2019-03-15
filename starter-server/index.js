const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const errorHandler = require("./handlers/error");
const newRoute = require("./routes/newroute");
const routerTest = express.Router();
const PORT = 8081;

app.use(cors());
app.use(bodyParser.json());

// add routes
app.get('/', function (req, res) {
  res.send('Hello World!')
})

// api/{testroute}
app.use("/api/", newRoute);

app.use(function(req, res, next) {
  let err = new Error("Not Found");
  err.status = 404;
  next(err);
});

app.use(errorHandler);

app.listen(PORT, function() {
  setTimeout(function() {
      console.log('Server waiting for the Database to start...');
      console.log(`Server started on port ${PORT}`);
  }, 3000);
});
