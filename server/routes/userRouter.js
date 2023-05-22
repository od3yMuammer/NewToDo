const { Router } = require("express");

const userController = require("../controllers/userController");

const router = Router();


router.post("/users/login", userController.login); // api/users/login
router.post("/users/reg", userController.register); // api/users/reg


module.exports = router;
