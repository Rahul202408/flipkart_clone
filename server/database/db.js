import mongoose from "mongoose";


export const Connection = async (username,password) => {
    const URL = `mongodb+srv://${username}:${password}@cluster0.l4saqq7.mongodb.net/?retryWrites=true&w=majority`;

    try{
       await mongoose.connect(URL,{ useUnifiedTopology:true , useNewUrlParser:true});
       console.log('DataBase Connected Successfully');
        }catch (error){
        console.log('Error While Connecting With the DataBase',error.message);
    }
}

export default Connection;