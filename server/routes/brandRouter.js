const Router = require('express')
const router = new Router()

router.post('/',(req, res) => {
    res.json({message: 'Brand created successfully'})
})
router.get('/',(req, res) => {
    res.json({message: 'List of all brands'})
})

module.exports = router