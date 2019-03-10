const express = require("express");
const router = express.Router({ mergeParams: true });


router.get('/newroute', function (req, res) {
  res.send('Hello World from New Route!')
})
module.exports = router;
