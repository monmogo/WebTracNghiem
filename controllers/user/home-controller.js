const router = require("express").Router();
router.get("/", (req, res) => {
    res.render("user/home/index", { layout: "layouts/frontend-layout" });
    // layout: "layout/backend_layout",
});

module.exports = router;
