const router = require("express").Router();

router.get("/cl", (req, res) => {
  console.log("Connected");
  res.send({ l_ch: "OK" });
});

module.exports = router;
