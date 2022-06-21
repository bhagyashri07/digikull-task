const express = require("express")

const StudentModal = require('../model/Student ')


const router = express.Router()



// ROUTE 1: create an student using: POST "/api/student/post".
router.post('/post',  async (req, res) => {
    try {
        
        let student = await StudentModal.insertMany(req.body)
        res.status(200).json({sucess:true, student})

    } catch (error) {
        console.error(error)
        res.status(500).json({ message: "Enternal server Error" })
    }
})



// ROUTE 2: get all  existing students using: GET "/api/student/getstudent".
router.get('/getstudent',  async (req, res) => {
    try {
        let student = await StudentModal.find()
        res.status(200).json({sucess:true , student})
        
    } catch (error) {
        console.log(error)
        res.status(500).json({message:"Enternal server error"})
        
    }
    
})


module.exports = router;