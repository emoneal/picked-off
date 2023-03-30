const express = require("express")
const app = express()
const {v4: uuidv4} = require('uuid')

const inventoryItems = [
    {
        name: "banana",
        type: "food",
        price: 200,
    },{
        name: "pants",
        type: "clothing",
        price: 2500,
    },{
        name: "basket ball",
        type: "toy",
        price: 1000,
    },{
        name: "rockem sockem robots",
        type: "toy",
        price: 1500,
    },{
        name: "shirt",
        type: "clothing",
        price: 800,
    },{
        name: "soup",
        type: "food",
        price: 300,
    },{
        name: "flour",
        type: "food",
        price: 100,
    }
]

app.use(express.json())

app.use("/inv", (req, res, next) => {
    console.log("Middleware executed")
    next()
})

app.get("/inv", (req, res, next) => {
    console.log("GET request received!")
    res.send(inventoryItems)
}) 

app.listen(9000, () => {
    console.log("App is listening on port 9000")
})