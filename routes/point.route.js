const express = require("express")
const router = express.Router();
const { getPoint, getAllPoints, postPoint, putPoint, deletePoint } = require('../controllers/point.controller.js')

router.get("/", getAllPoints)
router.get('/:id', getPoint)
router.post('/', postPoint)
router.put('/:id', putPoint)
router.delete('/:id', deletePoint)

module.exports = router;


