import mongoose from "mongoose";

const dbConn=async()=>{
    try {
        await mongoose.connect(process.env.MONGO_URI)
        console.log('db connected.')
    } catch (error) {
        console.log('error in dbConn',error)
    }
}
export default dbConn