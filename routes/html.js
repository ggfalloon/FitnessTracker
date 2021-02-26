const router = require("express").Router();
const path = require("path");
// Each of the below routes just handles the HTML page that the user gets sent to.

// index route loads view.html
router.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/index.html"));
});

// exercise route
router.get("/exercise", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/exercise.html"));
});

// // stats route
router.get("/stats", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/stats.html"));
});

// exports routes for use by the application
module.exports = router;


