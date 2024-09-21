import { connect } from "mongoose";
const dbconn = connect('mongodb://localhost:27017/MVC-Saraha').then(()=>{
    console.log("database connected successfully");
}).catch(()=>{
    console.log("database connected failed");
})
export default dbconn