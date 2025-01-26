const router = require("express").Router();
const protectedRoutes = require("../middlewire/auth.middlewire");
const {getUsersForSidebar, getMessages, sendMessages} = require("../controllers/message.controller");


router.get("/users", protectedRoutes, getUsersForSidebar)
router.get("/:id",protectedRoutes, getMessages);
router.post('/send/:id',protectedRoutes, sendMessages);

module.exports = router;