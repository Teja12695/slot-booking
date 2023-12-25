const mongoose = require('mongoose')


mongoose.connect("mongodb://localhost/Booking")


const contactsSchema = new mongoose.Schema({
    username:String,
    email:String,
    password:String
})


const User = mongoose.model('User',contactsSchema)


app.use(express.json)


async function readUser(username){
    const data = await User.findOne(username)
    return data[0]
}





