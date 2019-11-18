const router = require('express').Router();
const apiRoutes = require('./api')



// append api to my routes
router.use("/api", apiRoutes)

module.exports = router;