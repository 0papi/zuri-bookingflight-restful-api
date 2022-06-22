const express = require("express");
const router = express.Router();
const controller = require("../controllers/flightController");

router.get("/", controller.getAll);
router.post("/", controller.createNew);
router.get("/:id", controller.getSingle);
router.put("/:id", controller.patchSingle);
router.delete("/:id", controller.deleteSingle);

module.exports = router;
