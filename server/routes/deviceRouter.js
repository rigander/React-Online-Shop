const Router = require('express')
const router = new Router()

router.post('/',(req, res) => {
    res.json({message: 'Device created successfully'})
})
router.get('/',(req, res) => {
    res.json({message: 'List of all devices'})
})
router.get('/:id',(req, res) => {
    res.json({message: `Device with id ${req.params.id}`})
})

module.exports = router