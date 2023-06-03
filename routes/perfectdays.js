
const express = require('express');
const router = express.Router();
const controllers = require('../controllers');


router.put('/:id', controllers.perfectDayController.edit);
router.get('/:id/edit', controllers.viewsController.renderPerfectDayEdit);

router.get('/:id', controllers.perfectDayController.view);

router.get('/:id/delete', controllers.perfectDayController.delete);
module.exports = router;
