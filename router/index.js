const router = require('express').Router()
const controller = require('../controllers')
const dashboard = require('./dashboard')
const auth = require('./auth')


// Routes
router.get('/', controller.home)

router.use('/dashboard', dashboard)

router.use('/auth', auth)

router.use(controller.notFound)
router.use(controller.exception)


module.exports = router