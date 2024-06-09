const express = require("express");
const adminController = require("../Controllers/admin-controller");
const adminMiddleware = require("../middlewares/admin-middleware");
const authMiddleware = require("../middlewares/auth-middleware");


const router = express.Router();

router.route("/users").get(authMiddleware, adminMiddleware, adminController.getAllUsers);
router.route("/users/delete/:id").delete(authMiddleware, adminMiddleware, adminController.deleteUserById);
router.route("/users/:id").get(authMiddleware, adminMiddleware, adminController.getUserById);
router.route("/users/update/:id").patch(authMiddleware, adminMiddleware, adminController.updateUserById);
router.route("/contacts").get(authMiddleware, adminMiddleware, adminController.getAllContacts);

module.exports = router;