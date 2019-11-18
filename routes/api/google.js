const router = require("express").Router();
const controllers = require("../controllers")

router.use("/find", controllers.google.search)

module.exports = router;
