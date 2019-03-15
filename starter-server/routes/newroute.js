const express = require("express");
const router = express.Router({ mergeParams: true });


router.get('/testroute', function (req, res) {
  res.setHeader('Content-Type', 'application/json');
  res.json({username: "test_user", value: "test_value", info: "additional_info"});
})
module.exports = router;
