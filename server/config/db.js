import mongoose from "mongoose";
const connectDB = async () => {
    try{
        mongoose.connection.on('connected', ()=>console.log('Database connected'));
        await mongoose.connect(`${process.env.MONGODB_URI}/booking_system`);
    }catch (error){
        console.log(error.message);


    }
}
export default connectDB;
