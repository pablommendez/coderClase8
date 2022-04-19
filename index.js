const { json } = require('express')
const express = require('express')
const apiRouter = require('./routes/api/api')
const PORT = process.env.PORT || 8080

const app = express()
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(express.static('public'));


app.use('/api',apiRouter)
app.listen(PORT, () => {
    console.log(`Server on port ${PORT}`)})


