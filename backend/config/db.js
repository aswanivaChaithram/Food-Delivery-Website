import mongoose from 'mongoose';

export const connectDB = async () => {
    await mongoose.connect(
        'mongodb+srv://aswaniva040:AVaa1234@cluster0.0nnqjng.mongodb.net/food-delivery-website'
    ).then(() => console.log("DB connected"));
}

//export default connectDB;