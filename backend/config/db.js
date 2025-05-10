import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://JayeshUpare:Jayesh37%40@cluster0.n7kfupu.mongodb.net/food-del').then(()=>console.log("DB Connected"));
} 