import mongoose from "mongoose";

export const connectDB = ()=>{
    try {
        const connStr = "mongodb://localhost:27017/nov_transaction";
        const conn =mongoose.connect(connStr);

        conn
        ?console.log("Mongo connected")
        : console.log("Unable to connect Mongo");

    } catch (error) {
        console.log(error);
    }
};