const express = require('express')
const expressHandlebars = require('express-handlebars')
const mongoose = require('mongoose')

const PORT = process.env.PORT || 4000
const app = express()
const hbs = expressHandlebars.create({
    defaultLayout : 'main',
    extname : 'hbs'
})
app.engine('hbs', hbs.engine)
app.set('view engine', 'hbs')
app.set('views', 'views')
const todoRoutes = require('./routes/todos')
app.use(todoRoutes)

async function start() {
    try {
        await mongoose.connect('', {
            useNewUrlParser: true,
            useFindAndModify: false
        })
        app.listen(PORT, () => {
            console.log("Server started");
        })
        
    } catch (e) {
        console.log('Error ' + e);
    }
}

start()
document.querySelectorAll.every()