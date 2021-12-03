const express = require('express')
const expressLayouts = require('express-ejs-layouts');
const app = express()
const { PORT = 8000 } = process.env

// View Engine
app.use(express.static('public'))
app.set('view engine', 'ejs')
app.use(expressLayouts)

// parser
app.use(express.urlencoded({extended: false}))
app.use(express.json())

const router = require('./router')
app.use(router)

// Middlewares, pasang sebelum routing
const setDefault = (req, res, next) => {
    res.locals.contentName = "Default"
    // Silahkan tambahkan default variabel lain, bila diperlukan
next()}

app.use(expressLayouts)
app.set('layout', 'layouts/default')

app.listen(PORT, () => console.log(`server load on ${PORT}`))