const yearController = require('../controllers/yearController')
const Router = require('express');

const router = new Router();

router.get('/current', (req, res) => res.json(new Date().getFullYear()));
router.get('/:value', yearController.getYear);
router.get('/', yearController.getAllYears);
router.post('/', yearController.addYear);

module.exports = router;