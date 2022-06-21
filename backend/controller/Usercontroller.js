const User=require("../model/User");
const bcrypt=require("bcryptjs");
const jwt=require("jsonwebtoken");
const jwt_key='hgfertyuui&oiu@*%&';


// signup--
const signup=async(req,res)=>{
    try {
        let createUser=await User.findOne({email:req.body.email});
        if(createUser){
            return res 
            .status(400)
            .json({success:false,message:"the user is already exists"});

        }
        const password=req.body.password;
        const salt=bcrypt.genSaltSync(10);
        const hash=bcrypt.hashSync(password,salt);
        createUser=await new User({
            name :req.body.name,
            email:req.body.email,
            password:hash,
        });
        const payload={
            user:{
                id:createUser.id
            }
        }

        const token=jwt.sign(payload,jwt_key)

        createUser.save()
        res.status(200).json({success:true,token:token})
    } catch (error) {
        console.error(error.message);
        res.status(500).send("internal server error");
        
    }
}
////////signIn///////
const signIn = async (req,res)=>{
    const { email, password } = req.body;
    try {
      
      let user = await User.findOne({
        email: email,
      });
      // console.log(user);
      if (!user) {
        return res
          .status(400)
          .json({ success: false, message: "Please enter registered email" });
      }
      
      const passwordcompare = await bcrypt.compare(password, user.password);
      if (!passwordcompare) {
        return res
          .status(400)
          .json({ success: false, message: "incorrect Password" });
      }
     
      const payload = {
        user: {
          id: user._id,
        },
      };
      
      const authtoken = jwt.sign(payload, jwt_key);
      
      res.status(200).json({success:true, authtoken:authtoken})
    } catch (error) {
      console.log(error);
      res.status(500).send("internal server error");
    }
  
  }
  module.exports={signup, signIn}