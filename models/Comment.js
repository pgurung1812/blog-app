
const mongoose=require("mongoose")

const commentSchema= new mongoose.Schema({
   
    createdAt:{
        type: Date,
        default: Date.now,
    },
    comment:{
        type: String,
        required: true,
    },
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
    },
    post:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Post",
    },
    

}

)

module.exports=mongoose.model("Comment",commentSchema)