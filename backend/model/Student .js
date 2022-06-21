const mongoose = require("mongoose")
 
const StudentSchema = new mongoose.Schema({
    name: {
        type:String,
        required:true
    },
    age: {
        type:String,
        required:true
    },
    contact:{
        type:String,
        required:true
    },
    studentId: {
        type:String,
        required:true
    }
})
const StudentModal =  mongoose.model("student", StudentSchema)

module.exports = StudentModal;