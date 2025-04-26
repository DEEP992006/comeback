const express = require("express")
const route = express.Router()
const mym = require("../model/model")
route.get('/', async (req, res) => {
    await mym.deleteMany()
    res.send('Hello World!')
})
route.post("/", async (req, res) => {
    const { a } = req.body
    const newen = mym({
        name: a
    })
    const abv = await newen.save()
    res.send(abv)
})
route.put("/", async (req, res) => {
    const { a, b } = req.body
    const as = await mym.findOneAndUpdate({ name: a }, { name: b }, { new: true })
    res.send(as)
})
route.delete("/",async(req,res) => {
    let {a} = req.body
    let b =await mym.findOneAndDelete({name:a})
    res.send(b) 
})
module.exports = route