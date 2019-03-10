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

// api/{newroute}
app.use("/api/", newRoute);

app.use(function(req, res, next) {
  let err = new Error("Not Found");
  err.status = 404;
  next(err);
});

app.use(errorHandler);

app.listen(PORT, function() {
  console.log(`Server is starting on port ${PORT}`);
});
