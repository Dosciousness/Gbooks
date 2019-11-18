const router = require("express").Router();
const controllers = require("../controllers/index")


// all routes have prepended  "api/book/"
router
.post("/add", controllers.book.add)
.get("/getAll", controllers.book.getAll)
.delete("/del/:id", controllers.book.delOne)

module.exports = router;