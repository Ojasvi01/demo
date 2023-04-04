// // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled

const mongoose=require('mongoose')
mongoose.connect("mongodb://localhost:27017/appdb")
.then(()=>{
    console.log("mongodb connected");
})
.catch(()=>{
    console.log('failed to connect');
})

const newSchema=new mongoose.Schema({
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }
})
const collection=mongoose.model("collection",newSchema)

module.exports=collection;


// const mongoose = require('mongoose');

// const mongoURI = "mongodb://localhost:27017/appdb";

// const connectToMongo = async () => {
//   try {
//     await mongoose.connect(mongoURI, {
//       useNewUrlParser: true,
//       useUnifiedTopology: true,
//     });
//     console.log("Connected to MongoDB successfully");
//   } catch (error) {
//     console.error("Error connecting to MongoDB:", error);
//   }
// };

// export default connectToMongo ;