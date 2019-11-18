const router = require ("express").Router();
const bookRoutes = require("./book")
const googleRoutes = require("./google")
// this adds /books to the api route
router.use("/book", bookRoutes);
router.use("/google", googleRoutes);

module.exports = router;