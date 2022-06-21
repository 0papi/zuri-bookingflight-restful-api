const express = require("express");
const router = express.Router();
const controller = require("../controllers/flightController");

router.get("/", controller.getAll);
router.get("/:id", controller.getSingle);
router.put("/:id", controller.patchSingle);
router.delete("/:id", controller.deleteSingle);
router.post("/", controller.createNew);

module.exports = router;
