const Router = require('express')
const router = new Router()

router.post('/', (req, res) => {
    res.json({message: 'New type successfully created'})
})
router.get('/', (req, res) => {
    res.json({message: 'Types retrieved successfully'})
})

module.exports = router