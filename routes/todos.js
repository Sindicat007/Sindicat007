const {Router} = require('express')
const router = Router()

router.get('/', (req, res) => {
    res.render('index', {
        title : 'Todo list'
    })
})
router.get('/create', (req, res) => {
    res.render('create', {
        title : 'Todo create'
    })
})
module.exports = router