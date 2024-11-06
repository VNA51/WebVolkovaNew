
const express = require('express')
const path =require("path")
const fs = require('fs')
const app = express()
const port = 3000

app.use(express.json())
app.use(express.urlencoded())

app.use(express.json())


app.get('*', (req, res) => {
    res.sendFile('index.html',{root:path.join(__dirname,"./static")})
})

app.post('/reg-data', (req, res) => {
    console.log(">>>>>>>>>>", req.body)
    fs.appendFile("data.txt", JSON.stringify(req.body)+"\n",(err) => {
        if (err) {
            res.status(500).send("Ивините. Произошла ошибка. Попробуйте позже снова")
        } else {
            res.status(201).send("Заявка отправлена")
        }
    })
})


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
