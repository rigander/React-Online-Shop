const Router = require('express')
const router = new Router()

router.post('/registration', (req, res) => {
    res.json({message: 'User successfully registered'})
})
router.post('/login', (req, res) => {
    res.json({message: 'User successfully logged in'})
})
router.get('/auth', (req, res) => {
    res.json({message: 'User is authenticated'})
})

module.exports = router