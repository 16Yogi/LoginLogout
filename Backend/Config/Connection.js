import mongoose from "mongoose";

const connection = async (DATABASE_URL) =>{
    try{
        const DB_OPTION ={
            DBNAME:"login"
        }
        await mongoose.connect(DATABASE_URL,DB_OPTION)
        console.log("Ab tu lele😁")
    }catch(error){
        console.warn("fuck you😎")
        console.warn(error)
    }
}

export default connection