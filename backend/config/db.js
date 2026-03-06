import mongoose from "mongoose";


export const connectDB = async () => {
    await mongoose.connect("mongodb+srv://dibeshkumarparida2610_db_user:Dibesh007@cluster0.mhjuf7p.mongodb.net/MediCare")
        .then(() => {
            console.log("DB CONNECTED...")
        })

}




