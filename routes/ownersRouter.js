const express = require("express");
const router = express.Router();
const ownerModel = require("../models/owner-model");

if (process.env.NODE_ENV === "development") {
  router.post("/create", async function (req, res) {
    let owners = await ownerModel.find();
    if (owners.length > 0) {
      return res
        .send("503")
        .send("you don't have permission to createa new owner.");
    }
    res.send("you can create a new owner.");
  });
}
router.get("/", function (req, res) {
  res.send("hey!");
});
router.post("/create", function (req, res) {
  res.send("hey!");
});
module.exports = router;
