const mongoose=require("mongoose");

const UserSchema=new mongoose.Schema({
    username:{
        type:String,
        required:[true,"Username is required"],
        min:3,
        max:20,
        unique:true,
    },
    email:{
        type:String,
        required:[true,"email is required"],
        max:50,
        unique:true,
    },
    password:{
        type:String,
        required:[true,"password is required"],
        min:6,
    },
    profilePicture:{
        type:String,
        default:"",
    },
    coverPicture:{
        type:String,
        default:"",
    },
    followers:{
        type:Array,
        default:[],
    },
    following:{
        type:Array,
        default:[],
    },
    isAdmin:{
        type:Boolean,
        default:false,
    },
    desc:{
        type:String,
        max:50,
    },
    city:{
        type:String,
        max:30,
    },
    from:{
        type:String,
        max:30,
    },
    relationship:{
        type:Number,
        enum:[1,2,3],
    },

},
{timestamps:true})

module.exports=mongoose.model("User",UserSchema);