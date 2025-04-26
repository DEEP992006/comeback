const mongoose = require("mongoose")
const condb = async() => {
    await mongoose.connect("mongodb+srv://biptisurati:deep09@deep.xycm9.mongodb.net/movies?retryWrites=true&w=majority&appName=deep")
} 
module.exports = condb