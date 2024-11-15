import mongoose from "mongoose";
const dbConnect=async()=>{
    try{
      await mongoose.connect(process.env.MONGODB_URL)
      console.log("MongoDB connected Sucessfully")
    }catch (error){
        console.log("connected Failed",error)
    }
}

export default dbConnect;